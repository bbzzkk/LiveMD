package com.livemd.document.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class TeamDocumentsTitleUpdateRequestDto {
    private String title;

    @Builder
    public TeamDocumentsTitleUpdateRequestDto(String title){
        this.title = title;
    }
}
