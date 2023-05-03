package br.edu.utfpr.pb.pw25s.server.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "tb_typeaccount")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(of = {"id"})
public class TypeAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
}
