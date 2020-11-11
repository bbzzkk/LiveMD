//package com.livemd.document.domain;
//
//import com.livemd.document.domain.entity.Documents;
//import com.livemd.document.domain.repository.DocumentsRepository;
//import org.junit.After;
//import org.junit.Ignore;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//import static org.assertj.core.api.Assertions.assertThat;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//public class DocumentsRepositoryTest {
//
//    @Autowired
//    DocumentsRepository repository;
//
//    @After
//    public void cleanup(){
//        repository.deleteAll();
//    }
//
//    @Test @Ignore
//    public void saveAndFindDocuments(){
//
//        String ownerId = "ownerTest";
//        String docId = "uuid";
//
//        repository.save(Documents.builder()
//                .ownerId(ownerId)
//                .docId(docId)
//                .build());
//
//        List<Documents> documentsList = repository.findAll();
//
//        Documents documents = documentsList.get(0);
//        assertThat(documents.getOwnerId()).isEqualTo(ownerId);
//        assertThat(documents.getDocId()).isEqualTo(docId);
//    }
//
//    @Test
//    public void testBaseTimeEntity () {
//        //given
//        LocalDateTime now = LocalDateTime.of(2019,10,20,0,0,0);
//        repository.save(Documents.builder()
//                .ownerId("owner")
//                .docId("uuid")
//                .build());
//
//        //when
//        List<Documents> documentsList = repository.findAll();
//
//        //then
//        Documents documents = documentsList.get(0);
//
//        System.out.println(">>>>>> created_at" + documents.getCreated_at() + ", modified_at" + documents.getModified_at());
//
//        assertThat(documents.getCreated_at()).isAfter(now);
//        assertThat(documents.getModified_at()).isAfter(now);
//
//    }
//
//
//
//}
