package com.livemd.document.dto;

import com.livemd.document.domain.entity.Documents;
import lombok.Getter;

@Getter
public class DocumentsListResponseDto {
    private Long id;
    private String owner;
    private String title;
    private String content;

    public DocumentsListResponseDto(Documents entity) {
        this.id = entity.getId();
        this.owner = entity.getOwner();
        this.title = entity.getTitle();
        this.content = entity.getContent();
    }
}
