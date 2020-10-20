package com.livemd.document.dto;

import com.livemd.document.domain.entity.UserDocuments;
import lombok.Getter;

@Getter
public class UserDocumentsListResponseDto {
    private Long id;
    private String owner;
    private String uuid;
    private String title;
    private String content;

    public UserDocumentsListResponseDto(UserDocuments entity) {
        this.id = entity.getId();
        this.owner = entity.getOwner();
        this.uuid = entity.getUuid();
        this.title = entity.getTitle();
        this.content = entity.getContent();
    }
}
