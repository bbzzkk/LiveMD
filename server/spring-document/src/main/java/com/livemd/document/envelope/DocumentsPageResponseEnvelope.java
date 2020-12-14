package com.livemd.document.envelope;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;

@Getter
@RequiredArgsConstructor
public class DocumentsPageResponseEnvelope {

    private final int status;
    private final boolean result;
    private final Page data;
}
