package br.edu.utfpr.pb.pw25s.server.dto;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@Data
public class MovementDTO {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private BigDecimal valueAmount;

    @NotNull
    private Long date;

    private CategoryDTO category;

    @NotNull
    @Column(length = 255)
    @Size(min = 4, max = 255)
    private String description;

    private SituationDTO situation;

    private TypeMovementDTO type;
}
