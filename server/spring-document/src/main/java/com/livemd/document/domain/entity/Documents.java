package com.livemd.document.domain.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Documents {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String owner;

    @Column(nullable = false)
    private String title;

    @Column
    private String content;

    @Builder
    public Documents(String owner, String title, String content){
        this.owner = owner;
        this.title = title;
        this.content = content;
    }

    public void update(String title){
        this.title = title;
    }
}
