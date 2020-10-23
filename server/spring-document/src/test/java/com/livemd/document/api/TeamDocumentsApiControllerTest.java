package com.livemd.document.api;

import com.livemd.document.domain.entity.TeamDocuments;
import com.livemd.document.domain.entity.UserDocuments;
import com.livemd.document.domain.repository.TeamDocumentsRepository;
import com.livemd.document.dto.TeamDocumentsSaveRequestDto;
import com.livemd.document.dto.TeamDocumentsTitleUpdateRequestDto;
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
public class TeamDocumentsApiControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private TeamDocumentsRepository repository;

    @After
    public void clearAll() throws Exception {
        repository.deleteAll();
    }

    @Test
    public void createDocuments() throws Exception {

        String owner = "owner";
        String uuid = "uuid";
        TeamDocumentsSaveRequestDto dto = TeamDocumentsSaveRequestDto.builder()
                .owner(owner)
                .uuid(uuid)
                .build();

        String url = "http://localhost:" + port + "/api/v1/team-documents";

        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, dto, Long.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        List<TeamDocuments> all = repository.findAll();
        assertThat(all.get(0).getOwner()).isEqualTo(owner);
        assertThat(all.get(0).getUuid()).isEqualTo(uuid);
    }

    @Test
    public void findAllDocuments () throws Exception{
        String owner = "owner";
        String uuid = "uuid";
        TeamDocumentsSaveRequestDto dto = TeamDocumentsSaveRequestDto.builder()
                .owner(owner)
                .uuid(uuid)
                .build();

        String url = "http://localhost:" + port + "/api/v1/team-documents";

        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, dto, Long.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        List<TeamDocuments> teamDocumentsList = repository.findAll();

        assertThat(teamDocumentsList.get(0).getOwner()).isEqualTo(owner);
        assertThat(teamDocumentsList.get(0).getUuid()).isEqualTo(uuid);
    }

    @Test
    public void findDocumentsById () throws Exception{
        String owner = "owner";
        String uuid = "uuid";
        TeamDocumentsSaveRequestDto dto = TeamDocumentsSaveRequestDto.builder()
                .owner(owner)
                .uuid(uuid)
                .build();

        String url = "http://localhost:" + port + "/api/v1/team-documents";

        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, dto, Long.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        Optional<TeamDocuments> optTeamDocuments = repository.findById(1L);
        TeamDocuments teamDocuments = optTeamDocuments.get();

        assertThat(teamDocuments.getOwner()).isEqualTo(owner);
        assertThat(teamDocuments.getUuid()).isEqualTo(uuid);
    }

    @Test
    public void updateDocumentsTitle() throws Exception{
        //given
        TeamDocuments savedTeamDocuments = repository.save(TeamDocuments.builder()
                .owner("owner")
                .uuid("uuid")
                .title("title")
                .build());

        Long updateId = savedTeamDocuments.getId();
        String expectedTitle = "title2";

        TeamDocumentsTitleUpdateRequestDto requestDto = TeamDocumentsTitleUpdateRequestDto.builder()
                .title(expectedTitle)
                .build();

        String url = "http://localhost:" + port + "/api/v1/team-documents/" + updateId;

        HttpEntity<TeamDocumentsTitleUpdateRequestDto> requestEntity = new HttpEntity<>(requestDto);

        //when
        ResponseEntity<Long> responseEntity = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Long.class);

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        List<TeamDocuments> all = repository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(expectedTitle);

    }

    @Test
    public void deleteTeamDocuments () throws Exception{
        String owner = "owner";
        String uuid = "uuid";
        TeamDocumentsSaveRequestDto dto = TeamDocumentsSaveRequestDto.builder()
                .owner(owner)
                .uuid(uuid)
                .build();

        String url = "http://localhost:" + port + "/api/v1/team-documents";

        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, dto, Long.class);

        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        Optional<TeamDocuments> optTeamDocuments = repository.findById(1L);
        TeamDocuments teamDocuments = optTeamDocuments.get();

        repository.delete(teamDocuments);
    }
}

