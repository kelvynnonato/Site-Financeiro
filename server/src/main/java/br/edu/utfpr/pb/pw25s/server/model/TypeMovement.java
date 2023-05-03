package br.edu.utfpr.pb.pw25s.server.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "tb_typemovement")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(of = {"id"})
public class TypeMovement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
}
