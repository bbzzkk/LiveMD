package com.livemd.document.domain;

import com.livemd.document.domain.entity.UserDocuments;
import com.livemd.document.domain.repository.UserDocumentsRepository;
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
public class UserDocumentsRepositoryTest {

    @Autowired
    UserDocumentsRepository repository;

    @After
    public void cleanup(){
        repository.deleteAll();
    }

    @Test
    public void saveAndFindDocuments(){

        String owner = "ownerTest";
        String uuid = "uuid";

        repository.save(UserDocuments.builder()
                .owner(owner)
                .uuid(uuid)
                .build());

        List<UserDocuments> userDocumentsList = repository.findAll();

        UserDocuments userDocuments = userDocumentsList.get(0);
        assertThat(userDocuments.getOwner()).isEqualTo(owner);
        assertThat(userDocuments.getUuid()).isEqualTo(uuid);
    }



}
