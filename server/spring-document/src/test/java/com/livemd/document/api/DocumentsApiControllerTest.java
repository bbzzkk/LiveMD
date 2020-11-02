//package com.livemd.document.api;
//
//import com.livemd.document.domain.entity.Documents;
//import com.livemd.document.domain.repository.DocumentsRepository;
//import com.livemd.document.dto.DocumentsSaveRequestDto;
//import com.livemd.document.dto.DocumentsTitleUpdateRequestDto;
//import org.junit.After;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.boot.web.server.LocalServerPort;
//import org.springframework.http.HttpEntity;
//import org.springframework.http.HttpMethod;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.util.List;
//import java.util.Optional;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//public class DocumentsApiControllerTest {
//
//    @LocalServerPort
//    private int port;
//
//    @Autowired
//    private TestRestTemplate restTemplate;
//
//    @Autowired
//    private DocumentsRepository repository;
//
//    @After
//    public void clearAll() throws Exception {
//        repository.deleteAll();
//    }
//
//    @Test
//    public void createDocuments () throws Exception{
//
//        String owner = "owner";
//        String uuid = "uuid";
//        DocumentsSaveRequestDto dto = DocumentsSaveRequestDto.builder()
//                .owner(owner)
//                .uuid(uuid)
//                .build();
//
//        String url = "http://localhost:" + port + "/api/v1/user-documents";
//
//        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, dto, Long.class);
//
//        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
//        assertThat(responseEntity.getBody()).isGreaterThan(0L);
//
//        List<Documents> all = repository.findAll();
//        assertThat(all.get(0).getOwner()).isEqualTo(owner);
//        assertThat(all.get(0).getUuid()).isEqualTo(uuid);
//    }
//
//    @Test
//    public void findAllDocuments () throws Exception{
//        String owner = "owner";
//        String uuid = "uuid";
//        DocumentsSaveRequestDto dto = DocumentsSaveRequestDto.builder()
//                .owner(owner)
//                .uuid(uuid)
//                .build();
//
//        String url = "http://localhost:" + port + "/api/v1/user-documents";
//
//        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, dto, Long.class);
//
//        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
//        assertThat(responseEntity.getBody()).isGreaterThan(0L);
//
//        List<Documents> documentsList = repository.findAll();
//
//        assertThat(documentsList.get(0).getOwner()).isEqualTo(owner);
//        assertThat(documentsList.get(0).getUuid()).isEqualTo(uuid);
//    }
//
//    @Test
//    public void findDocumentsById () throws Exception{
//        String owner = "owner";
//        String uuid = "uuid";
//        DocumentsSaveRequestDto dto = DocumentsSaveRequestDto.builder()
//                .owner(owner)
//                .uuid(uuid)
//                .build();
//
//        String url = "http://localhost:" + port + "/api/v1/user-documents";
//
//        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, dto, Long.class);
//
//        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
//        assertThat(responseEntity.getBody()).isGreaterThan(0L);
//
//        Optional<Documents> optUserDocuments = repository.findById(1L);
//        Documents documents = optUserDocuments.get();
//
//        assertThat(documents.getOwner()).isEqualTo(owner);
//        assertThat(documents.getUuid()).isEqualTo(uuid);
//    }
//
//    @Test
//    public void updateDocumentsTitle() throws Exception{
//        //given
//        Documents savedDocuments = repository.save(Documents.builder()
//                .owner("owner")
//                .uuid("uuid")
//                .title("title")
//                .build());
//
//        Long updateId = savedDocuments.getId();
//        String expectedTitle = "title2";
//
//        DocumentsTitleUpdateRequestDto requestDto = DocumentsTitleUpdateRequestDto.builder()
//                .title(expectedTitle)
//                .build();
//
//        String url = "http://localhost:" + port + "/api/v1/user-documents/" + updateId;
//
//        HttpEntity<DocumentsTitleUpdateRequestDto> requestEntity = new HttpEntity<>(requestDto);
//
//        //when
//        ResponseEntity<Long> responseEntity = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Long.class);
//
//        //then
//        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
//        assertThat(responseEntity.getBody()).isGreaterThan(0L);
//
//        List<Documents> all = repository.findAll();
//        assertThat(all.get(0).getTitle()).isEqualTo(expectedTitle);
//
//    }
//
//    @Test
//    public void deleteUserDocuments () throws Exception{
//        String owner = "owner";
//        String uuid = "uuid";
//        DocumentsSaveRequestDto dto = DocumentsSaveRequestDto.builder()
//                .owner(owner)
//                .uuid(uuid)
//                .build();
//
//        String url = "http://localhost:" + port + "/api/v1/user-documents";
//
//        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, dto, Long.class);
//
//        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
//        assertThat(responseEntity.getBody()).isGreaterThan(0L);
//
//        Optional<Documents> optUserDocuments = repository.findById(1L);
//        Documents documents = optUserDocuments.get();
//
//        repository.delete(documents);
//    }
//}
