package com.livemd.document.envelope;

import com.livemd.document.dto.DocumentsResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
//@AllArgsConstructor
public class DocumentsResponseEnvelope {

    private final int status;
    private final boolean result;
    private final DocumentsResponseDto data;


}

