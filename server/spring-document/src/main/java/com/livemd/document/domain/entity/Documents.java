package com.livemd.document.domain.entity;

import com.livemd.document.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Documents extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String ownerId;

    @Column(unique = true, nullable = false)
    private String docId;

    @Column
    private String title;

    @Column
    private String content;

    @Builder
    public Documents(String ownerId, String docId, String title, String content){
        this.ownerId = ownerId;
        this.docId = docId;
        this.title = title;
        this.content = content;
    }
    public void update(String title){
        this.title = title;
    }

}
