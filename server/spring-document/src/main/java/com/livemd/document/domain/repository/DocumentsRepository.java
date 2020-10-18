package com.livemd.document.domain.repository;

import com.livemd.document.domain.entity.Documents;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentsRepository extends JpaRepository<Documents, Long> {

}
