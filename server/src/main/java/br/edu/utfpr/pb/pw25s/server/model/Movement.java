package br.edu.utfpr.pb.pw25s.server.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
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

    @Column(name = "value_amount")
    @NotNull
    private BigDecimal valueAmount;

    @NotNull
    @Column(length = 20, name = "date_movement")
    @Size(min = 4, max = 20)
    @Pattern(regexp = "^[ 0-9-+/]+$")
    private String dateMovement;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

    @NotNull
    @Column(length = 1024)
    @Size(min = 4, max = 1024)
    private String description;

    @ManyToOne
    @JoinColumn(name = "situation_id", referencedColumnName = "id")
    private Situation situation;

    @ManyToOne
    @JoinColumn(name = "typemovement_id", referencedColumnName = "id")
    private TypeMovement type;

    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private Account account;
}

