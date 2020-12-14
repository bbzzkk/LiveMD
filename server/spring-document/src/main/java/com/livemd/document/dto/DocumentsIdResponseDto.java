package com.livemd.document.dto;

import com.livemd.document.domain.entity.Documents;
import lombok.*;


@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DocumentsIdResponseDto
{

    private String docId;

    public DocumentsIdResponseDto(Documents entity){
        this.docId = entity.getDocId();
    }
}
