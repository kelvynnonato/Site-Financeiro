package br.edu.utfpr.pb.pw25s.server.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "tb_account")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(of = {"id"})
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotNull
    @Column
    private long number;

    @NotNull
    @Column
    private long agency;

    @NotNull
    @Column(length = 50)
    @Size(min = 4, max = 50)
    private String bank;

    @ManyToOne
    @JoinColumn(name = "type_account_id", referencedColumnName = "id")
    private TypeAccount type;

    @ManyToOne
    @JoinColumn(name= "user_ud", referencedColumnName = "id")
    private User user;
}
