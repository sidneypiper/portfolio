package dev.saltyyy.portfolio.repositories;

import dev.saltyyy.portfolio.entities.Technology;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TechnologyRepository extends JpaRepository<Technology, Long> {
}
