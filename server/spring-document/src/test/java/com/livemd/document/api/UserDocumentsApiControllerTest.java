package com.livemd.document.api;

import com.livemd.document.domain.entity.UserDocuments;
import com.livemd.document.domain.repository.UserDocumentsRepository;
import com.livemd.document.dto.UserDocumentsResponseDto;
import com.livemd.document.dto.UserDocumentsSaveRequestDto;
import com.livemd.document.dto.DocumentsTitleUpdateRequestDto;
import jdk.nashorn.internal.runtime.options.Option;
import org.junit.After;
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

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserDocumentsApiControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserDocumentsRepository repository;

    @After
    public void clearAll() throws Exception {
        repository.deleteAll();
    }

    @Test
    public void createDocuments () throws Exception{

        String owner = "owner";
        String uuid = "uuid";
        UserDocumentsSaveRequestDto dto = UserDocumentsSaveRequestDto.builder()
                .owner(owner)
                .uuid(uuid)
                .build();

        String url = "http://localhost:" + port + "/api/v1/documents";

        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, dto, Long.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        List<UserDocuments> all = repository.findAll();
        assertThat(all.get(0).getOwner()).isEqualTo(owner);
        assertThat(all.get(0).getUuid()).isEqualTo(uuid);
    }

    @Test
    public void findDocumentsById () throws Exception{
        String owner = "owner";
        String uuid = "uuid";
        UserDocumentsSaveRequestDto dto = UserDocumentsSaveRequestDto.builder()
                .owner(owner)
                .uuid(uuid)
                .build();

        String url = "http://localhost:" + port + "/api/v1/documents";

        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, dto, Long.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        Optional<UserDocuments> optUserDocuments = repository.findById(1L);
        UserDocuments userDocuments = optUserDocuments.get();

        assertThat(userDocuments.getOwner()).isEqualTo(owner);
        assertThat(userDocuments.getUuid()).isEqualTo(uuid);
    }

    @Test
    public void updateDocumentsTitle() throws Exception{
        //given
        UserDocuments savedUserDocuments = repository.save(UserDocuments.builder()
                .owner("owner")
                .title("title")
                .content("content")
                .build());

        Long updateId = savedUserDocuments.getId();
        String expectedTitle = "title2";

        DocumentsTitleUpdateRequestDto requestDto = DocumentsTitleUpdateRequestDto.builder()
                .title(expectedTitle)
                .build();

        String url = "http://localhost:" + port + "/api/v1/documents/" + updateId;

        HttpEntity<DocumentsTitleUpdateRequestDto> requestEntity = new HttpEntity<>(requestDto);

        //when
        ResponseEntity<Long> responseEntity = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Long.class);

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        List<UserDocuments> all = repository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(expectedTitle);

    }
}
