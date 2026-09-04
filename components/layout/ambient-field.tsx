/**
 * A sala.
 *
 * O sistema de vidro precisa de alguma coisa atrás para refratar — sobre
 * `#0a0a0c` liso, `backdrop-filter` não tem o que amostrar e a lâmina vira
 * um preenchimento levemente mais claro. Este é o campo de luz que o resto
 * da página atravessa.
 *
 * Fica `fixed`: a luz não rola. O conteúdo é que desliza por cima dela, então
 * a mesma lâmina de vidro mostra uma parte diferente da sala conforme sobe na
 * viewport. É o efeito que faz o vidro ler como matéria em vez de filtro.
 *
 * Custo: dois elementos pintados uma vez. Nada anima aqui de propósito —
 * repintar o fundo obrigaria toda superfície com `backdrop-filter` acima dele
 * a refazer o filtro a cada quadro.
 */
export default function AmbientField() {
    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
            <div className="aurora absolute inset-0" />
            <div className="aurora-grain absolute inset-0" />
        </div>
    )
}
