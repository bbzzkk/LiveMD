package com.livemd.document.dto;

import com.livemd.document.domain.entity.Documents;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class DocumentsResponseDto {

    private Long id;
    private String ownerId;
    private String docId;
    private String title;
    private String content;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public DocumentsResponseDto(Documents entity){
        this.id = entity.getId();
        this.ownerId = entity.getOwnerId();
        this.docId = entity.getDocId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.createdDate = entity.getCreatedDate();
        this.modifiedDate = entity.getModifiedDate();
    }
}
