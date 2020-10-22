package com.livemd.document.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserDocumentsTitleUpdateRequestDto {
    private String title;

    @Builder
    public UserDocumentsTitleUpdateRequestDto(String title){
        this.title = title;
    }
}
