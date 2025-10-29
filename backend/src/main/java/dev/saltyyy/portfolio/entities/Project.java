package dev.saltyyy.portfolio.entities;

import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    @Column(columnDefinition = "TEXT")
    private String description;
    private String imagePath;
    private Date released;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Technology> technologies;

    public Project() {
    }

    public Project(String title, String description, List<Technology> technologies, String imagePath, Date released) {
        this.title = title;
        this.description = description;
        this.technologies = technologies;
        this.imagePath = imagePath;
        this.released = released;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Technology> getTechnologies() {
        return technologies;
    }

    public void setTechnologies(List<Technology> technologies) {
        this.technologies = technologies;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public Date getReleased() {
        return released;
    }

    public void setReleased(Date released) {
        this.released = released;
    }
}
