package com.livemd.document.domain.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class UserDocuments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String uuid;

    @Column(nullable = false)
    private String owner;

    @Column
    private String title;

    @Column
    private String content;

    @Builder
    public UserDocuments(String owner, String uuid, String title, String content){
        this.owner = owner;
        this.uuid = uuid;
        this.title = title;
        this.content = content;
    }

    public void update(String title){
        this.title = title;
    }
}
