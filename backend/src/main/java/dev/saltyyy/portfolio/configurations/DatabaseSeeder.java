package dev.saltyyy.portfolio.configurations;

import dev.saltyyy.portfolio.entities.Project;
import dev.saltyyy.portfolio.entities.Technology;
import dev.saltyyy.portfolio.repositories.ProjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DatabaseSeeder {

    @Bean
    CommandLineRunner initDatabase(ProjectRepository projectRepository) {
        return args -> {
            Technology vue = new Technology("Vue", "vue.svg");
            Technology nuxt = new Technology("Nuxt", "nuxt.svg");
            Technology ts = new Technology("TypeScript", "ts.svg");
            Technology js = new Technology("JavaScript", "js.svg");
            Technology postgres = new Technology("PostgreSQL", "postgres.svg");
            Technology sqlite = new Technology("SQLite", "sqlite.svg");
            Technology docker = new Technology("Docker", "docker.svg");
            Technology python = new Technology("Python", "python.svg");
            Technology c = new Technology("C", "c.svg");
            Technology cpp = new Technology("C++", "cpp.svg");
            Technology cs = new Technology("C#", "cs.svg");
            Technology ocaml = new Technology("OCaml", "ocaml.svg");
            Technology prisma = new Technology("Prisma", "prisma.svg");
            Technology github = new Technology("GitHub", "github.svg");
            Technology gitlab = new Technology("GitLab", "gitlab.svg");
            Technology java = new Technology("Java", "java.svg");
            Technology spring_boot = new Technology("Spring Boot", "spring_boot.svg");
            Technology react = new Technology("React", "react.svg");
            Technology tailwind = new Technology("Tailwind CSS", "tailwind.svg");

            List<Project> projects = List.of(
                    new Project("Dreamly", "Dreamly is a mobile- and desktop-optimized web app for tracking dreams and sleep patterns. It also lets users search dreams and tag them with labels. I developed it together with a friend.", List.of(nuxt, vue, ts, postgres, docker, prisma, github, tailwind), "dreamly.png", 2024),
                    new Project("Physics Engine", "As part of a university project, I developed a physics engine for the open-source Godot game engine. The engine handled realistic and efficient simulations of rigid body dynamics, collision detection, and friction.", List.of(cpp, cs, gitlab), "physics_engine.png", 2023),
                    new Project("Operating System", "I developed a custom operating system for the ATmega644 microcontroller as part of a university project. It included features like process scheduling, dynamic memory management, and shared memory handling between multiple processes.", List.of(c, gitlab), "os.png", 2024),
                    new Project("Macho", "Macho is a frontend-only web app for Twitch that allows users to watch multiple chat streams at once. It supports all major emote libraries such as BTTV, FFZ, and 7TV, providing a seamless chat experience for stream viewers.", List.of(vue, js, github, tailwind), "macho.png", 2024),
                    new Project("Advent of Code", "Advent of Code is an annual event featuring daily algorithmic puzzles throughout December. In 2023, I solved all of the puzzles using Python, focusing on writing clean and efficient solutions to each challenge.", List.of(python, ocaml, github), "aoc.png", 2023),
                    new Project("Bachelor's Thesis", "In my bachelor’s thesis, I investigated different methods for detecting spam in YouTube comments. The goal was to create a new dataset that could be used to train AI-based detection systems. I developed a tool to collect and analyze comments and related video data.", List.of(python, docker, sqlite, postgres, gitlab), "bachelors_thesis.png", 2025),
                    new Project("Portfolio", "This personal portfolio website showcases my projects, skills, and interests as a developer. Built with React, TypeScript, and Tailwind CSS, it features smooth animations, dynamic content, and a modern design.", List.of(java, spring_boot, react, ts, tailwind), "portfolio.png", 2025)
            );

            projectRepository.saveAll(projects);
        };
    }
}
