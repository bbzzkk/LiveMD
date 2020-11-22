package com.livemd.document.api;

import com.livemd.document.domain.entity.Documents;
import com.livemd.document.domain.repository.DocumentsRepository;
import com.livemd.document.dto.DocumentsIdResponseDto;
import com.livemd.document.dto.DocumentsSaveRequestDto;
import com.livemd.document.dto.DocumentsTitleUpdateRequestDto;
import com.livemd.document.envelope.DocumentsIdResponseEnvelope;
import com.livemd.document.envelope.DocumentsPageResponseEnvelope;
import com.livemd.document.envelope.DocumentsResponseEnvelope;
import com.livemd.document.service.DocumentsService;
import net.bytebuddy.implementation.bind.MethodDelegationBinder;
import org.junit.After;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class DocumentsApiControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private DocumentsRepository repository;

    @Autowired
    private DocumentsService service;

    @After
    public void clearAll() throws Exception {
        repository.deleteAll();
    }

    @Test
    public void createDocuments () throws Exception{
        String ownerId = "ownerTest";
        String docId = "docIdTest";
        DocumentsSaveRequestDto dto = DocumentsSaveRequestDto.builder()
                .docId(docId)
                .build();

        String url = "http://localhost:" + port + "/api/v1/documents?oid=" + ownerId;

        ResponseEntity<DocumentsIdResponseEnvelope> responseEntity = restTemplate.postForEntity(url, dto, DocumentsIdResponseEnvelope.class, ownerId);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isNotNull();

        List<Documents> all = repository.findAll();
        assertThat(all.get(0).getOwnerId()).isEqualTo(ownerId);
        assertThat(all.get(0).getDocId()).isEqualTo(docId);
    }

    @Test
    public void findAllByOwnerId () throws Exception{
        //given
        Documents documents = repository.save(Documents.builder()
                .ownerId("owner")
                .docId("docId")
                .build());

        String url = "http://localhost:" + port + "/api/v1/documents?oid=" + documents.getOwnerId();

        ResponseEntity<DocumentsPageResponseEnvelope> responseEntity = restTemplate.getForEntity(url, DocumentsPageResponseEnvelope.class);

        //page에 default construct가 없어서 테스트 통과되지 않음. -> page를 custom해서 써야 하는가?
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void findDocumentsById () throws Exception{
        //given
        Documents documents = repository.save(Documents.builder()
                .ownerId("owner")
                .docId("docId")
                .build());

        String url = "http://localhost:" + port + "/api/v1/documents/" + documents.getDocId();

        ResponseEntity<DocumentsResponseEnvelope> responseEntity = restTemplate.getForEntity(url, DocumentsResponseEnvelope.class, documents.getDocId());

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getData().getDocId()).isEqualTo(documents.getDocId());
    }

    @Test
    public void searchByKeyword () throws Exception{
        //given
        Documents documents = repository.save(Documents.builder()
                .ownerId("owner")
                .docId("docId")
                .title("title")
                .build());

        String url = "http://localhost:" + port + "/api/v1/documents/search" + documents.getTitle();
    }

    @Test
    public void updateDocumentsTitle() throws Exception{
        //given
        Documents savedDocuments = repository.save(Documents.builder()
                .ownerId("owner")
                .docId("docId")
                .build());

        String updateDocId = savedDocuments.getDocId();
        String expectedTitle = "updatedTitle";

        DocumentsTitleUpdateRequestDto requestDto = DocumentsTitleUpdateRequestDto.builder()
                .title(expectedTitle)
                .build();

        String url = "http://localhost:" + port + "/api/v1/documents/" + updateDocId;

        HttpEntity<DocumentsTitleUpdateRequestDto> requestEntity = new HttpEntity<>(requestDto);

        //when
        ResponseEntity<DocumentsIdResponseEnvelope> responseEntity = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, DocumentsIdResponseEnvelope.class, updateDocId);

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody().getData().getDocId()).isEqualTo(updateDocId);

        List<Documents> all = repository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(expectedTitle);


    }

    @Test
    public void deleteUserDocuments () throws Exception{
        Documents documents = repository.save(Documents.builder()
                .ownerId("owner")
                .docId("docId")
                .build());

        String url = "http://localhost:" + port + "/api/v1/documents/" + documents.getDocId();

        restTemplate.delete(url, documents.getDocId());
//        delete의 return value는 없음. restTemplate.exchange()에서 method를 delete로 해준 뒤 받아와야 함. 하지만 request body가 없는 경우엔?
//        ResponseEntity<DocumentsIdResponseEnvelope> responseEntity = restTemplate.exchange(url, HttpMethod.DELETE, DocumentsIdResponseEnvelope.class, documents.getDocId());


        //http 상태 코드 확인하는 것 필요. 하지만 restTemplate의 value를 받아올 수 없음.. ㅠ
        List<Documents> all = repository.findAll();
        assertThat(all.isEmpty()).isTrue();
    }

}
