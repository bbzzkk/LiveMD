package com.livemd.document.dto;

import com.livemd.document.domain.entity.Documents;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class DocumentsSaveRequestDto {

    private String owner;
    private String title;
    private String content;

    @Builder
    public DocumentsSaveRequestDto(String owner, String title, String content){
        this.owner = owner;
        this.title = title;
        this.content = content;
    }

    public Documents toEntity(){
        return Documents.builder()
                .owner(owner)
                .title(title)
                .content(content)
                .build();
    }
}
