package com.livemd.document.domain;

import com.livemd.document.domain.entity.UserDocuments;
import com.livemd.document.domain.repository.UserDocumentsRepository;
import org.junit.After;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;
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

    @Test @Ignore
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

    @Test
    public void testBaseTimeEntity () {
        //given
        LocalDateTime now = LocalDateTime.of(2019,10,20,0,0,0);
        repository.save(UserDocuments.builder()
                .owner("owner")
                .uuid("uuid")
                .build());

        //when
        List<UserDocuments> userDocumentsList = repository.findAll();

        //then
        UserDocuments userDocuments = userDocumentsList.get(0);

        System.out.println(">>>>>> created_at" + userDocuments.getCreated_at() + ", modified_at" + userDocuments.getModified_at());

        assertThat(userDocuments.getCreated_at()).isAfter(now);
        assertThat(userDocuments.getModified_at()).isAfter(now);

    }



}
