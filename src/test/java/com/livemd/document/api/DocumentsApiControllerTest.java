package com.livemd.document.api;

import com.livemd.document.domain.entity.Documents;
import com.livemd.document.domain.repository.DocumentsRepository;
import com.livemd.document.dto.DocumentsSaveRequestDto;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

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

    @After
    public void clearAll() throws Exception {
        repository.deleteAll();
    }

    @Test
    public void createDocuments () throws Exception{

        String owner = "owner";
        String title = "title";
        String content = "content";
        DocumentsSaveRequestDto dto = DocumentsSaveRequestDto.builder()
                .owner(owner)
                .title(title)
                .content(content)
                .build();

        String url = "http://localhost:" + port + "/api/v1/documents";

        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, dto, Long.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        List<Documents> all = repository.findAll();
        assertThat(all.get(0).getOwner()).isEqualTo(owner);
        assertThat(all.get(0).getTitle()).isEqualTo(title);

    }
}
