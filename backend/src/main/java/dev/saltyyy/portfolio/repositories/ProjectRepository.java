package dev.saltyyy.portfolio.repositories;

import dev.saltyyy.portfolio.entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
