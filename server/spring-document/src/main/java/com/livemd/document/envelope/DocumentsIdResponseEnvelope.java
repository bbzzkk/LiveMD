package com.livemd.document.envelope;


import com.livemd.document.dto.DocumentsIdResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class DocumentsIdResponseEnvelope {

    private final int status;
    private final boolean result;
    private final DocumentsIdResponseDto data;

}
