package com.livemd.document.domain;

import com.livemd.document.domain.entity.Documents;
import com.livemd.document.domain.repository.DocumentsRepository;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DocumentsRepositoryTest {

    @Autowired
    DocumentsRepository repository;

    @After
    public void cleanup(){
        repository.deleteAll();
    }

    @Test
    public void saveAndFindDocuments(){

        String owner = "ownerTest";
        String title = "titleTest";

        repository.save(Documents.builder()
                .owner(owner)
                .title(title)
                .content("contentTest")
                .build());

        List<Documents> documentsList = repository.findAll();

        Documents documents = documentsList.get(0);
        assertThat(documents.getOwner()).isEqualTo(owner);
        assertThat(documents.getTitle()).isEqualTo(title);
        assertThat(documents.getContent()).isEqualTo("contentTest");
    }



}
