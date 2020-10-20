package com.livemd.document.dto;

import com.livemd.document.domain.entity.UserDocuments;
import lombok.Getter;

@Getter
public class DocumentsResponseDto {

    private Long id;
    private String owner;
    private String title;
    private String content;

    public DocumentsResponseDto(UserDocuments entity){
        this.id = entity.getId();
        this.owner = entity.getOwner();
        this.title = entity.getTitle();
        this.content = entity.getContent();
    }
}
