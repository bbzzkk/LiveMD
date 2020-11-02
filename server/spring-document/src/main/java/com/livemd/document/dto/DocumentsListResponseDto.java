package com.livemd.document.dto;

import com.livemd.document.domain.entity.Documents;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class DocumentsListResponseDto {
    private Long id;
    private String ownerId;
    private String docId;
    private String title;
    private String content;
    private LocalDateTime created_at;
    private LocalDateTime modified_at;

    public DocumentsListResponseDto(Documents entity) {
        this.id = entity.getId();
        this.ownerId = entity.getOwnerId();
        this.docId = entity.getDocId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.created_at = entity.getCreated_at();
        this.modified_at = entity.getModified_at();
    }
}
