package br.edu.utfpr.pb.pw25s.server.dto;

import br.edu.utfpr.pb.pw25s.server.model.Account;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.math.BigDecimal;

@Data
public class MovementDTO {

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


    private CategoryDTO category;

    @NotNull
    @Column(length = 1024)
    @Size(min = 4, max = 1024)
    private String description;

    private SituationDTO situation;

    private TypeMovementDTO type;

    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private Account account;
}
