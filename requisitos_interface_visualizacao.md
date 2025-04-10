# 7. Requisitos de Interface do Utilizador e Visualização

## 7.1 Design de Dashboard

A plataforma Power BI incluirá uma variedade de dashboards projetados para atender às necessidades de diferentes perfis de utilizadores e casos de uso. As seguintes especificações descrevem os requisitos para estes dashboards.

### Especificações do Dashboard Principal

1. **Dashboard Executivo**
   - **Propósito**: Fornecer uma visão geral de alto nível dos indicadores de abandono para a liderança institucional
   - **Componentes Principais**:
     - KPIs a nível institucional com indicadores de tendência
     - Gráficos comparativos entre escolas
     - Métricas de retenção ano a ano
     - Indicadores de alerta estratégicos
     - Comparações de referência com dados nacionais
   - **Princípios de Design**:
     - Design limpo e minimalista com foco em métricas-chave
     - Limitado a 5-7 visualizações de alto impacto
     - Codificação de cores clara para indicadores de desempenho
     - Layout otimizado para dispositivos móveis
   - **Interatividade**:
     - Seletores de período de tempo (ano académico, semestre)
     - Capacidade de drill-down até ao nível de escola
     - Enriquecimento de tooltip com informações contextuais

2. **Dashboard de Gestão de Escola**
   - **Propósito**: Fornecer aos administradores de escola uma visão detalhada dos padrões de abandono dentro da sua escola
   - **Componentes Principais**:
     - KPIs a nível de escola com desagregações por programa
     - Gráficos comparativos de programas
     - Identificação de cursos críticos
     - Distribuição de risco dos estudantes
     - Métricas de acompanhamento de intervenção
   - **Princípios de Design**:
     - Equilíbrio entre informações detalhadas e resumidas
     - Linguagem visual consistente com o dashboard executivo
     - Ênfase em insights acionáveis
     - Vistas comparativas com médias institucionais
   - **Interatividade**:
     - Filtros de programa e curso
     - Filtros de categoria de estudante
     - Seletores de período de tempo
     - Drill-down até ao nível de curso e UC

3. **Dashboard de Coordenador de Curso**
   - **Propósito**: Fornecer aos coordenadores de curso uma visão detalhada dos padrões de abandono dentro de cursos específicos
   - **Componentes Principais**:
     - KPIs a nível de curso com desagregações por UC
     - Visualização da progressão dos estudantes
     - Análise de dificuldade das UCs
     - Identificação de estudantes em risco
     - Motor de recomendação de intervenção
   - **Princípios de Design**:
     - Informações detalhadas com categorização clara
     - Layout orientado para ação
     - Ênfase em indicadores de alerta precoce
     - Integração com ferramentas de intervenção
   - **Interatividade**:
     - Filtros de UC
     - Filtros de categoria de estudante
     - Seletores de ano académico e semestre
     - Drill-down até ao nível de estudante individual (com permissões apropriadas)

4. **Dashboard de Apoio ao Estudante**
   - **Propósito**: Fornecer aos serviços de apoio ao estudante ferramentas para identificar e auxiliar estudantes em risco
   - **Componentes Principais**:
     - Listas de estudantes em risco com fatores de risco
     - Ferramentas de acompanhamento de intervenção
     - Métricas de utilização de serviços de apoio
     - Indicadores de taxa de sucesso para intervenções
     - Interface de gestão de casos
   - **Princípios de Design**:
     - Layout orientado a tarefas
     - Priorização clara de casos
     - Integração com fluxo de trabalho de apoio
     - Ênfase na visão centrada no estudante
   - **Interatividade**:
     - Filtros de nível de risco
     - Filtros de categoria de apoio
     - Acompanhamento de estado de casos
     - Visualização de histórico de intervenção

### Especificações de Dashboard Específico por Perfil

1. **Dashboards para Liderança Institucional**
   - **Utilizadores**: Presidente, Vice-Presidentes, Diretores
   - **Áreas de Foco**:
     - KPIs estratégicos
     - Comparações de referência
     - Tendências de longo prazo
     - Otimização de alocação de recursos
   - **Características Principais**:
     - Resumo de alto nível com detalhes mínimos
     - Relatórios de exceção para áreas que requerem atenção
     - Análise de impacto financeiro
     - Ferramentas de planeamento estratégico

2. **Dashboards para Administradores Académicos**
   - **Utilizadores**: Diretores de Escola, Chefes de Departamento, Coordenadores de Programa
   - **Áreas de Foco**:
     - KPIs operacionais
     - Desempenho de programa e curso
     - Eficácia do corpo docente
     - Otimização curricular
   - **Características Principais**:
     - Métricas operacionais e estratégicas equilibradas
     - Indicadores de desempenho do corpo docente
     - Ferramentas de análise curricular
     - Métricas de utilização de recursos

3. **Dashboards para Corpo Docente**
   - **Utilizadores**: Professores, Instrutores
   - **Áreas de Foco**:
     - Métricas específicas de curso
     - Envolvimento dos estudantes
     - Eficácia da avaliação
     - Indicadores de alerta precoce
   - **Características Principais**:
     - Acompanhamento do envolvimento dos estudantes
     - Análise de desempenho de avaliação
     - Identificação de estudantes em risco
     - Ferramentas de recomendação de intervenção

4. **Dashboards para Analistas**
   - **Utilizadores**: Analistas de Dados, Investigadores Institucionais
   - **Áreas de Foco**:
     - Análises avançadas
     - Descoberta de padrões
     - Modelagem preditiva
     - Análise ad-hoc
   - **Características Principais**:
     - Capacidades avançadas de filtragem e drill-down
     - Ferramentas de análise estatística
     - Acompanhamento de desempenho de modelos
     - Monitorização de qualidade de dados

### Especificações de Visualização Móvel

1. **Visualização Móvel para Executivos**
   - **Propósito**: Fornecer métricas-chave para executivos em dispositivos móveis
   - **Requisitos de Design**:
     - Limitado a 3-5 KPIs críticos
     - Layout de coluna única
     - Controlos otimizados para toque
     - Visualizações simplificadas
   - **Características Principais**:
     - Notificações de alerta
     - Indicadores rápidos de estado
     - Drill-down simplificado
     - Consultas ativadas por voz

2. **Visualização Móvel Operacional**
   - **Propósito**: Fornecer ao pessoal operacional acesso em movimento a métricas-chave
   - **Requisitos de Design**:
     - Interface orientada a tarefas
     - Botões de ação para tarefas comuns
     - Integração de notificações
     - Capacidade offline para métricas-chave
   - **Características Principais**:
     - Alertas de risco de estudantes
     - Acompanhamento de intervenção
     - Filtros rápidos para cenários comuns
     - Integração com ferramentas de comunicação

## 7.2 Modelos de Relatório

A plataforma incluirá uma variedade de modelos de relatório para suportar diferentes necessidades analíticas e cenários de utilizador.

### Modelos de Relatório Padrão

1. **Relatório de Análise de Abandono Institucional**
   - **Propósito**: Análise abrangente dos padrões de abandono a nível institucional
   - **Secções de Conteúdo**:
     - Resumo executivo
     - Métricas gerais de abandono
     - Comparação de escolas e programas
     - Análise de categoria de estudantes
     - Tendências ano a ano
     - Comparações de referência
     - Recomendações
   - **Visualizações**:
     - Gráficos de tendência para métricas-chave
     - Gráficos de barras comparativos para escolas/programas
     - Mapas de calor para cursos críticos
     - Gráficos de distribuição para categorias de estudantes
     - Matrizes de correlação para fatores de risco
   - **Formato de Entrega**:
     - Relatório interativo em Power BI
     - PDF exportável com principais conclusões
     - Opções de distribuição programada

2. **Relatório de Desempenho de Escola**
   - **Propósito**: Análise detalhada de abandono e retenção a nível de escola
   - **Secções de Conteúdo**:
     - Métricas resumidas da escola
     - Comparação de programas
     - Análise de cursos
     - Desagregação por categoria de estudantes
     - Eficácia de intervenção
     - Utilização de recursos
     - Recomendações
   - **Visualizações**:
     - Scorecards de desempenho de programa
     - Matriz de dificuldade de curso
     - Diagramas de fluxo da jornada do estudante
     - Gráficos de impacto de intervenção
     - Análise de alocação de recursos
   - **Formato de Entrega**:
     - Relatório interativo em Power BI
     - Slides prontos para apresentação
     - Tabelas de dados exportáveis para Excel

3. **Relatório de Análise de Risco de Curso**
   - **Propósito**: Análise detalhada dos fatores de risco de abandono a nível de curso
   - **Secções de Conteúdo**:
     - Métricas resumidas do curso
     - Análise de desempenho das UCs
     - Padrões de envolvimento dos estudantes
     - Análise de impacto de avaliação
     - Indicadores de alerta precoce
     - Recomendações de intervenção
   - **Visualizações**:
     - Comparação de desempenho das UCs
     - Gráficos de tendência de envolvimento
     - Matriz de correlação de avaliação
     - Distribuição de risco dos estudantes
     - Mapa de oportunidade de intervenção
   - **Formato de Entrega**:
     - Relatório interativo em Power BI
     - Resumo amigável para instrutores
     - Modelo de plano de ação

4. **Relatório de Perfil de Risco do Estudante**
   - **Propósito**: Avaliação de risco individual do estudante e planeamento de intervenção
   - **Secções de Conteúdo**:
     - Informações resumidas do estudante
     - Histórico de desempenho académico
     - Métricas de envolvimento
     - Análise de fatores de risco
     - Recomendações de serviços de apoio
     - Histórico de intervenção
   - **Visualizações**:
     - Linha do tempo de desempenho académico
     - Gráfico radar de envolvimento
     - Gráfico de contribuição de fatores de risco
     - Indicadores de eficácia de intervenção
     - Comparação com pares (anonimizada)
   - **Formato de Entrega**:
     - Relatório interativo em Power BI
     - Resumo amigável para orientadores
     - Plano de ação de apoio ao estudante

### Capacidades de Relatório Personalizado

1. **Opções de Personalização de Relatório**
   - **Personalização Visual**:
     - Seleção de tipo de gráfico
     - Ajuste de esquema de cores
     - Modificação de layout
     - Opções de marca personalizada
   - **Personalização de Conteúdo**:
     - Seleção e priorização de métricas
     - Criação de cálculos personalizados
     - Regras de formatação condicional
     - Esquemas de categorização personalizados
   - **Personalização de Filtro**:
     - Configurações de filtro salvas
     - Hierarquias de filtro personalizadas
     - Configurações de comportamento de filtragem cruzada
     - Estados de filtro padrão

2. **Ferramentas de Análise Ad-Hoc**
   - **Recursos de Self-Service**:
     - Seleção de campo por arrastar e soltar
     - Criação de visualização em tempo real
     - Capacidades de consulta em linguagem natural
     - Editor de cálculo personalizado
   - **Análises Avançadas**:
     - Ferramentas de análise estatística
     - Funções de análise de tendência
     - Deteção de outliers
     - Modelagem de cenário what-if
   - **Exploração de Dados**:
     - Capacidades ilimitadas de drill-down
     - Análise multidimensional
     - Agrupamento e binning personalizados
     - Ordenação e filtragem avançadas

3. **Fluxo de Trabalho de Criação de Relatório**
   - **Criação Baseada em Modelo**:
     - Modelos de ponto de partida para análises comuns
     - Assistentes guiados de criação de relatório
     - Recomendações de melhores práticas
     - Sugestões de layout
   - **Desenvolvimento Colaborativo**:
     - Desenvolvimento compartilhado de relatório
     - Controlo de versão
     - Fluxo de trabalho de revisão e aprovação
     - Recursos de comentário e anotação
   - **Processo de Publicação**:
     - Fluxo de trabalho de certificação de relatório
     - Marcação de metadados
     - Gestão de grupo de distribuição
     - Sistema de notificação de atualização

### Opções de Exportação e Partilha

1. **Formatos de Exportação**
   - **Formatos de Documento**:
     - PDF com resolução e orientação configuráveis
     - PowerPoint com gráficos editáveis
     - Word com visualizações incorporadas
     - Excel com tabelas de dados subjacentes
   - **Formatos de Dados**:
     - CSV para exportação de dados brutos
     - JSON para exportação de dados estruturados
     - XML para integração de sistema
     - XLSX para uso analítico

2. **Mecanismos de Partilha**
   - **Partilha Interna**:
     - Links diretos para relatórios e dashboards
     - Relatórios incorporados em portais institucionais
     - Subscrições por email com entrega programada
     - Notificações móveis para atualizações críticas
   - **Partilha Externa**:
     - Acesso seguro para utilizadores externos
     - Publicação pública de relatório (quando apropriado)
     - Relatórios incorporados em websites externos
     - Partilha de dados anonimizados para investigação

3. **Recursos de Colaboração**
   - **Discussão e Anotação**:
     - Threads de comentários em relatórios e visualizações
     - Anotações visuais e destaque
     - Atribuição de item de ação
     - Acompanhamento de decisão
   - **Sistema de Notificação**:
     - Subscrições de alerta
     - Notificações de atualização de relatório
     - Alertas baseados em limiar
     - Emails de resumo programados

## 7.3 Capacidades de Filtragem e Análise

A plataforma fornecerá capacidades robustas de filtragem e análise para permitir que os utilizadores explorem dados e obtenham insights.

### Especificações de Filtro por Tipo de Entidade

1. **Filtros de Estudante**
   - **Filtros Demográficos**:
     - Nacionalidade (internacional vs. nacional)
     - Origem geográfica (região, cidade)
     - Faixa etária
     - Género
   - **Filtros Académicos**:
     - Método de entrada (CTEsP, CNAES, M23, TCS)
     - Nível académico (CTEsP, Licenciatura, Mestrado, Doutoramento)
     - Ano de estudo
     - Situação académica
   - **Filtros de Estado**:
     - Necessidades educativas especiais (NEE)
     - Estatuto de trabalhador-estudante
     - Estatuto de bolseiro
     - Estatuto residencial (local vs. deslocado)

2. **Filtros de Curso**
   - **Filtros Organizacionais**:
     - Escola
     - Departamento
     - Área científica
     - Nível académico
   - **Filtros de Desempenho**:
     - Intervalo de taxa de abandono
     - Intervalo de taxa de conclusão
     - Intervalo de nota média
     - Nível de dificuldade
   - **Filtros de Característica**:
     - Tipo de curso
     - Método de entrega
     - Horário (diurno, noturno, fim de semana)
     - Valor de crédito

3. **Filtros de UC (Unidade Curricular)**
   - **Filtros Organizacionais**:
     - Associação de curso
     - Área científica
     - Ano no currículo
     - Semestre
   - **Filtros de Desempenho**:
     - Intervalo de taxa de aprovação
     - Intervalo de nota média
     - Intervalo de taxa de presença
     - Nível de dificuldade
   - **Filtros de Característica**:
     - Tipo de UC (teórica, prática, mista)
     - Método de avaliação
     - Valor de crédito
     - Pré-requisitos

4. **Filtros de Tempo**
   - **Filtros de Período Académico**:
     - Ano académico
     - Semestre
     - Mês
     - Semana
   - **Filtros Comparativos**:
     - Comparação ano a ano
     - Comparação semestre a semestre
     - Comparação de período personalizado
     - Janelas de tempo móveis

### Capacidades de Análise de Correlação

1. **Ferramentas de Análise Bivariada**
   - **Visualização de Correlação**:
     - Gráficos de dispersão com linhas de tendência
     - Mapas de calor para correlações categóricas
     - Gráficos de bolha para relacionamentos multivariáveis
     - Exibições de coeficiente de correlação
   - **Exploração de Relacionamento**:
     - Indicadores de força e direção

(Content truncated due to size limit. Use line ranges to read in chunks)