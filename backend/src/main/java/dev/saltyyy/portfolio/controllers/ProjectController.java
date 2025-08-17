package dev.saltyyy.portfolio.controllers;

import dev.saltyyy.portfolio.entities.Project;
import dev.saltyyy.portfolio.repositories.ProjectRepository;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin
public class ProjectController {

    private final ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @GetMapping
    public List<Project> getAllProjects() {
        List<Project> projects = projectRepository.findAll(Sort.by(Sort.Direction.DESC, "released"));
        for (Project project : projects) {
            project.getTechnologies().sort((t1, t2) -> t1.getName().compareToIgnoreCase(t2.getName()));
        }
        return projects;
    }

}
