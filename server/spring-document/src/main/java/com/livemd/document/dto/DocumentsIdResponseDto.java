package com.livemd.document.dto;

import com.livemd.document.domain.entity.Documents;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;


@Getter

public class DocumentsIdResponseDto {

    private String docId;

    public DocumentsIdResponseDto(Documents entity){
        this.docId = entity.getDocId();
    }
}
