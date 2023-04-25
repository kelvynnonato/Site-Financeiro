package br.edu.utfpr.pb.pw25s.server.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@Entity
@Table(name = "tb_movement")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(of = {"id"})

public class Movement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private BigDecimal value;

    @NotNull
    private Long date;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

    @NotNull
    @Column(length = 255)
    @Size(min = 4, max = 255)
    private String Description;

    @ManyToOne
    @JoinColumn(name = "situation_id", referencedColumnName = "id")
    private Situation Situation;

    @ManyToOne
    @JoinColumn(name = "typeMovement_id", referencedColumnName = "id")
    private TypeMovement Type;
}

