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

    @Column(columnDefinition = "varchar(255) default 'Untitled'")
    private String title;

    @Column
    private String content;

    @Column(columnDefinition = "boolean default false")
    private boolean isMarked;

    @Builder
    public Documents(String ownerId, String docId, String title, String content, boolean isMarked){
        this.ownerId = ownerId;
        this.docId = docId;
        this.title = title;
        this.content = content;
        this.isMarked = isMarked;
    }
    public void update(String title){
        this.title = title;
    }

    public void updateMarked(){
        this.isMarked = !this.isMarked;}

}
