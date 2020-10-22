package com.livemd.document.dto;

import com.livemd.document.domain.entity.TeamDocuments;
import lombok.Getter;

@Getter
public class TeamDocumentsResponseDto {

    private Long id;
    private String owner;
    private String uuid;
    private String title;
    private String content;

    public TeamDocumentsResponseDto(TeamDocuments entity){
        this.id = entity.getId();
        this.owner = entity.getOwner();
        this.uuid = entity.getUuid();
        this.title = entity.getTitle();
        this.content = entity.getContent();
    }
}
