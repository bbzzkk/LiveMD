package com.livemd.document.dto;

import com.livemd.document.domain.entity.UserDocuments;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserDocumentsSaveRequestDto {

    private String owner;
    private String uuid;

    @Builder
    public UserDocumentsSaveRequestDto(String owner, String uuid){
        this.owner = owner;
        this.uuid = uuid;
    }

    public UserDocuments toEntity(){
        return UserDocuments.builder()
                .owner(owner)
                .uuid(uuid)
                .build();
    }
}
