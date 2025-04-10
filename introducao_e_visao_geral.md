# 1. Sumário Executivo

## Visão Geral do Projeto
Este documento apresenta as especificações para o desenvolvimento de uma plataforma abrangente em Power BI com um datawarehouse académico focado no acompanhamento e análise de indicadores de abandono estudantil no IPLeiria. A plataforma visa fornecer aos administradores, docentes e funcionários insights acionáveis sobre padrões de abandono estudantil, permitindo estratégias de intervenção precoce e melhorando as taxas de retenção de estudantes.

A solução proposta integrará dados de vários sistemas académicos para criar uma visão unificada da progressão, envolvimento e fatores de risco dos estudantes. Através de dashboards e relatórios interativos, os stakeholders poderão monitorizar indicadores de abandono em múltiplos níveis (desde unidades curriculares individuais até métricas institucionais), analisar diferentes categorias de estudantes, acompanhar padrões de matrícula e identificar sinais precoces de potencial abandono.

## Objetivos e Metas
Os principais objetivos deste projeto de datawarehouse académico em Power BI são:

1. Criar um repositório centralizado de dados académicos focado em indicadores de retenção e abandono estudantil
2. Desenvolver um conjunto abrangente de métricas e KPIs para identificar e monitorizar fatores de risco de abandono
3. Implementar dashboards e relatórios interativos que forneçam insights em vários níveis organizacionais
4. Permitir a tomada de decisões baseada em dados para melhorar a retenção e o sucesso dos estudantes
5. Fornecer sistemas de alerta precoce para identificar estudantes em risco antes que abandonem os seus estudos
6. Facilitar a análise de correlação entre diferentes fatores que possam influenciar as taxas de abandono
7. Facilitar a análise histórica, em tempo real e preditiva de padrões de abandono

## Resultados e Benefícios Esperados
A implementação desta plataforma Power BI com um datawarehouse académico deverá proporcionar os seguintes benefícios:

1. **Melhoria na Retenção de Estudantes**: Ao identificar precocemente estudantes em risco, a instituição pode implementar estratégias de intervenção direcionadas para reduzir as taxas de abandono.

2. **Tomada de Decisão Aprimorada**: Administradores e docentes terão acesso a dados e análises abrangentes para tomar decisões informadas sobre programas académicos, serviços de apoio e alocação de recursos.

3. **Eficiência Operacional**: Dados centralizados e relatórios automatizados reduzirão os esforços manuais de recolha e análise de dados, permitindo que a equipa se concentre em estratégias de intervenção em vez de processamento de dados.

4. **Insights Mais Profundos**: A capacidade de correlacionar diferentes fatores e analisar padrões proporcionará insights mais profundos sobre as causas do abandono estudantil e a eficácia das estratégias de retenção.

5. **Gestão Proativa**: O sistema de alerta precoce permitirá uma gestão proativa da retenção de estudantes em vez de respostas reativas a eventos de abandono.

6. **Melhor Planeamento Académico**: A compreensão dos padrões de abandono informará o design curricular, as metodologias de ensino e o planeamento de serviços de apoio.

7. **Melhoria no Desempenho Institucional**: No geral, a plataforma contribuirá para melhorar as métricas de desempenho institucional relacionadas com o sucesso e as taxas de conclusão dos estudantes.

# 2. Introdução

## Contexto e Antecedentes
As instituições de ensino superior em todo o mundo enfrentam desafios significativos relacionados com a retenção e conclusão dos estudantes. O abandono estudantil representa não apenas uma perda de potencial para o estudante individual, mas também impacta a eficiência institucional, a reputação e a sustentabilidade financeira.

O IPLeiria, como muitas instituições de ensino superior, reconhece a importância de compreender e abordar os fatores que contribuem para o abandono estudantil. A instituição identificou a necessidade de uma plataforma abrangente de análise de dados que possa fornecer insights sobre padrões de abandono e fatores de risco em diferentes níveis da organização.

Atualmente, os dados relacionados com a progressão, envolvimento e abandono dos estudantes estão distribuídos por vários sistemas e departamentos, tornando difícil obter uma visão holística da situação. Os processos manuais de recolha e análise de dados são demorados e podem não fornecer insights oportunos para intervenção. Além disso, existe a necessidade de métricas e indicadores padronizados para garantir a monitorização e relatórios consistentes de dados relacionados com o abandono.

A plataforma Power BI proposta com um datawarehouse académico visa abordar estes desafios, fornecendo uma solução centralizada, automatizada e de fácil utilização para análise e monitorização do abandono.

## Propósito do Documento
Este documento de especificações serve como um guia abrangente para o desenvolvimento e implementação da plataforma Power BI com um datawarehouse académico focado em indicadores de abandono. Ele descreve os requisitos funcionais e técnicos, especificações do modelo de dados, design da interface do utilizador e diretrizes de implementação.

O documento destina-se a:

1. Fornecer uma compreensão clara do âmbito do projeto, objetivos e resultados esperados
2. Definir a arquitetura técnica e o modelo de dados para a plataforma
3. Especificar os indicadores e métricas de abandono a serem implementados
4. Delinear os requisitos de interface do utilizador e visualização
5. Estabelecer diretrizes para implementação, teste e implantação
6. Servir como referência para todos os stakeholders envolvidos no projeto

## Âmbito do Projeto
O âmbito deste projeto abrange o design, desenvolvimento e implementação de uma plataforma Power BI com um datawarehouse académico que se concentra em indicadores de abandono estudantil. A plataforma irá:

1. Integrar dados de vários sistemas académicos, incluindo sistemas de informação estudantil, sistemas de gestão de aprendizagem e plataformas de avaliação
2. Implementar uma arquitetura de datawarehouse otimizada para análise de dados académicos
3. Desenvolver relatórios e dashboards em Power BI para análise de abandono em diferentes níveis organizacionais
4. Implementar métricas e indicadores para monitorizar fatores de risco de abandono
5. Fornecer capacidades de filtragem e análise para diferentes perfis de utilizadores
6. Permitir análise histórica, em tempo real e preditiva de padrões de abandono
7. Implementar sistemas de alerta para identificação precoce de estudantes em risco

O projeto será implementado em fases, com foco inicial nos indicadores de abandono principais e capacidades básicas de relatórios, seguido por análises mais avançadas e recursos preditivos em fases subsequentes.

## Stakeholders
Os principais stakeholders para este projeto incluem:

1. **Liderança Institucional**: Presidentes, vice-presidentes e diretores que necessitam de insights de alto nível sobre padrões de abandono e desempenho institucional.

2. **Administradores Académicos**: Diretores de escola, chefes de departamento e coordenadores de programa que necessitam de informações detalhadas sobre taxas de abandono dentro das suas unidades académicas.

3. **Corpo Docente**: Professores e instrutores que necessitam de insights sobre o envolvimento e desempenho dos estudantes nos seus cursos.

4. **Serviços de Apoio ao Estudante**: Conselheiros, orientadores e pessoal de apoio que trabalham diretamente com estudantes em risco.

5. **Departamento de TI**: Pessoal técnico responsável pela implementação e manutenção da plataforma.

6. **Analistas de Dados**: Especialistas que utilizarão a plataforma para análise aprofundada e relatórios.

7. **Estudantes**: Os beneficiários finais de estratégias de retenção melhoradas, embora não sejam utilizadores diretos da plataforma.

Cada grupo de stakeholders tem necessidades de informação específicas e interagirá com a plataforma de maneiras diferentes, exigindo dashboards e relatórios personalizados para apoiar os seus processos de tomada de decisão.
