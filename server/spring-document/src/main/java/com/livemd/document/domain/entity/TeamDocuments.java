package com.livemd.document.domain.entity;

import com.livemd.document.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class TeamDocuments extends BaseTimeEntity {

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
    public TeamDocuments(String owner, String uuid, String title, String content){
        this.owner = owner;
        this.uuid = uuid;
        this.title = title;
        this.content = content;
    }
    public void update(String title){
        this.title = title;
    }

}
