package com.livemd.document.dto;

import com.livemd.document.domain.entity.TeamDocuments;
import lombok.Builder;

public class TeamDocumentsSaveRequestDto {

    private String owner;
    private String uuid;

    @Builder
    public TeamDocumentsSaveRequestDto(String owner, String uuid){
        this.owner = owner;
        this.uuid = uuid;
    }

    public TeamDocuments toEntity(){
        return TeamDocuments.builder()
                .owner(owner)
                .uuid(uuid)
                .build();
    }
}
