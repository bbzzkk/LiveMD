package com.livemd.document.dto;

import com.livemd.document.domain.entity.Documents;
import lombok.*;

@ToString
@Setter
@Getter
@NoArgsConstructor
public class DocumentsSaveRequestDto {

    private String ownerId;
    private String docId;

    @Builder
    public DocumentsSaveRequestDto(String docId){
        this.docId = docId;
    }

    public Documents toEntity(){
        return Documents.builder()
                .ownerId(ownerId)
                .docId(docId)
                .build();
    }

}
