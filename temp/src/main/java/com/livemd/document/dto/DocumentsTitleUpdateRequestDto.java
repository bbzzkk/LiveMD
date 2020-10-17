package com.livemd.document.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class DocumentsTitleUpdateRequestDto {
    private String title;

    @Builder
    public DocumentsTitleUpdateRequestDto(String title){
        this.title = title;
    }
}
