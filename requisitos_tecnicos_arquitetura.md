# 3. Requisitos do Sistema

## 3.1 Requisitos Funcionais

### Requisitos de Recolha e Integração de Dados
- O sistema deve integrar dados de múltiplas fontes académicas, incluindo sistemas de informação estudantil, sistemas de gestão de aprendizagem (ex: Moodle) e plataformas de avaliação
- O sistema deve suportar extração automatizada de dados dos sistemas de origem com frequência configurável
- O sistema deve manter a linhagem de dados para rastrear a origem e transformações de todos os elementos de dados
- O sistema deve suportar tanto processamento em lote como atualizações de dados em tempo quase real para indicadores críticos
- O sistema deve validar a qualidade dos dados durante o processo de integração e sinalizar inconsistências

### Requisitos de Análise e Relatórios
- O sistema deve fornecer dashboards e relatórios pré-construídos para diferentes níveis organizacionais (UCs, Curso, Escola, IPLeiria, Ensino Superior)
- O sistema deve suportar análise ad-hoc e criação de relatórios personalizados por utilizadores autorizados
- O sistema deve permitir análise de correlação entre diferentes indicadores de abandono
- O sistema deve suportar três perspetivas temporais: análise histórica, monitorização em tempo real e análise preditiva
- O sistema deve calcular todos os indicadores de abandono especificados na secção 6 deste documento
- O sistema deve suportar análise comparativa entre anos académicos, cursos e escolas

### Requisitos de Acesso e Interação do Utilizador
- O sistema deve implementar controlo de acesso baseado em funções para restringir a visibilidade dos dados com base nos perfis de utilizador
- O sistema deve fornecer capacidades de filtragem por tipo de entidade, categorias de estudantes, períodos académicos, etc.
- O sistema deve suportar funcionalidade de drill-down de métricas resumidas para dados detalhados
- O sistema deve permitir aos utilizadores exportar relatórios e dados em múltiplos formatos (PDF, Excel, etc.)
- O sistema deve fornecer uma interface amigável acessível a utilizadores com diferentes níveis de experiência técnica

### Requisitos de Alerta e Notificação
- O sistema deve implementar um sistema de alerta precoce para identificar estudantes em risco de abandono
- O sistema deve suportar limiares de alerta configuráveis para diferentes indicadores
- O sistema deve fornecer indicadores visuais (vermelho, amarelo, verde) para avaliação rápida de status
- O sistema deve suportar distribuição programada de relatórios para stakeholders
- O sistema deve rastrear histórico de alertas e resultados de intervenção

## 3.2 Requisitos Não-Funcionais

### Requisitos de Desempenho
- O sistema deve suportar acesso concorrente de pelo menos 100 utilizadores sem degradação significativa de desempenho
- O tempo de carregamento do dashboard não deve exceder 3 segundos em condições normais de operação
- A geração de relatórios deve ser concluída dentro de 5 segundos para relatórios padrão
- As operações de atualização de dados devem ser concluídas dentro das janelas de manutenção definidas
- O tempo de resposta de consulta não deve exceder 2 segundos para 95% das consultas

### Requisitos de Escalabilidade
- O sistema deve ser escalável para acomodar pelo menos 5 anos de dados históricos
- O sistema deve suportar uma base crescente de utilizadores sem alterações significativas na arquitetura
- O sistema deve lidar com volumes crescentes de dados com impacto mínimo no desempenho
- A arquitetura deve permitir a adição de novas fontes de dados e indicadores

### Requisitos de Segurança e Privacidade
- O sistema deve cumprir com os regulamentos de proteção de dados (RGPD e regulamentos locais)
- O sistema deve implementar encriptação para dados sensíveis tanto em repouso como em trânsito
- O sistema deve manter registos de acesso detalhados para fins de auditoria
- O sistema deve implementar autenticação multifator para acesso administrativo
- O sistema deve suportar anonimização de dados para determinados cenários de relatórios

### Requisitos de Conformidade
- O sistema deve aderir às políticas de governança de dados institucionais
- O sistema deve cumprir com os padrões de acessibilidade para software educacional
- O sistema deve manter políticas de retenção de dados de acordo com os requisitos institucionais
- O sistema deve suportar trilhas de auditoria para verificação de conformidade

### Requisitos de Usabilidade
- A interface do sistema deve seguir padrões de design consistentes em todos os componentes
- O sistema deve fornecer ajuda contextual e documentação
- O sistema deve suportar múltiplos idiomas, com foco inicial no português
- O sistema deve ser acessível em diferentes dispositivos (desktop, tablet) com design responsivo
- O sistema deve fornecer navegação intuitiva entre relatórios e dashboards relacionados

### Requisitos de Manutenção
- O sistema deve incluir documentação abrangente para todos os componentes
- O sistema deve suportar atualizações modulares sem afetar toda a plataforma
- O sistema deve incluir ferramentas de monitorização para saúde e desempenho do sistema
- O sistema deve suportar testes automatizados para componentes críticos
- O sistema deve incluir capacidades de recuperação de desastres

# 4. Arquitetura Técnica

## 4.1 Arquitetura Geral

A solução de datawarehouse académico em Power BI seguirá uma arquitetura moderna baseada em nuvem que integra vários componentes para fornecer uma plataforma analítica abrangente. A arquitetura consiste nos seguintes componentes principais:

1. **Camada de Fontes de Dados**: Inclui todos os sistemas de origem que fornecem dados para o datawarehouse
2. **Camada de Integração de Dados**: Lida com a extração, transformação e carregamento de dados
3. **Camada de Armazenamento de Dados**: Compreende o datawarehouse e seus componentes
4. **Camada Semântica**: Fornece lógica de negócios e modelagem de dados
5. **Camada de Apresentação**: Entrega relatórios, dashboards e visualizações aos utilizadores finais
6. **Camada de Segurança**: Garante a proteção de dados e controlos de acesso apropriados

### Componentes do Sistema e Integração

![Diagrama de Componentes do Sistema]

O sistema integrará os seguintes componentes:

1. **Sistemas de Origem**:
   - Sistema de Informação Estudantil (registos académicos, dados de matrícula)
   - Sistema de Gestão de Aprendizagem (Moodle - atividade do curso, dados de avaliação)
   - Plataformas de Avaliação (resultados de exames, avaliação contínua)
   - Sistemas Financeiros (informações de bolsas, estado de pagamento de propinas)
   - Sistemas de Rastreamento de Presença
   - Sistemas de Serviços de Apoio ao Estudante

2. **Ferramentas de ETL/Integração**:
   - Microsoft Power BI Dataflows
   - Azure Data Factory
   - Scripts de integração personalizados conforme necessário

3. **Datawarehouse**:
   - Azure SQL Database ou SQL Server
   - Design de esquema em estrela com modelagem dimensional
   - Data marts para domínios analíticos específicos

4. **Camada Semântica**:
   - Conjunto de Dados do Power BI
   - Modelos tabulares com medidas DAX
   - Colunas e medidas calculadas

5. **Camada de Apresentação**:
   - Serviço Power BI
   - Relatórios e Dashboards Power BI
   - Power BI Mobile

6. **Componentes de Segurança**:
   - Integração com Azure Active Directory
   - Implementação de Segurança a Nível de Linha
   - Registo e monitorização de auditoria

### Diagramas de Fluxo de Dados

![Diagrama de Fluxo de Dados]

O fluxo de dados através do sistema segue estes caminhos principais:

1. **Fluxo de Aquisição de Dados**:
   - Sistemas de origem → Processos ETL → Área de staging → Datawarehouse → Data marts

2. **Fluxo de Relatórios**:
   - Datawarehouse → Modelos semânticos → Relatórios e dashboards → Utilizadores finais

3. **Fluxo de Alertas**:
   - Datawarehouse → Processamento de alertas → Sistema de notificação → Stakeholders

### Interfaces do Sistema

O sistema fornecerá as seguintes interfaces:

1. **Interfaces de Fonte de Dados**:
   - Conexões API para sistemas de origem
   - Conectores de base de dados
   - Capacidades de importação de ficheiros

2. **Interfaces de Utilizador**:
   - Interface web do Serviço Power BI
   - Interface de aplicação móvel
   - Relatórios incorporados em portais institucionais

3. **Interfaces Administrativas**:
   - Monitorização e gestão de ETL
   - Administração de segurança
   - Monitorização de saúde do sistema

## 4.2 Arquitetura do Datawarehouse

### Princípios de Design do Datawarehouse

O datawarehouse será projetado seguindo estes princípios-chave:

1. **Orientado por Assunto**: Organizado em torno de assuntos principais como estudantes, cursos, matrículas e desempenho académico.

2. **Integrado**: Dados de diferentes fontes serão consolidados com nomenclatura, unidades de medida e estruturas de codificação consistentes.

3. **Variante no Tempo**: O datawarehouse manterá dados históricos para permitir análise de tendências e comparações temporais.

4. **Não-Volátil**: Uma vez que os dados entram no datawarehouse, serão estáveis e não sujeitos a alterações frequentes.

5. **Modelagem Dimensional**: O datawarehouse utilizará design de esquema em estrela para otimizar o desempenho de consultas e processamento analítico.

### Arquitetura de Armazenamento de Dados

![Arquitetura de Armazenamento de Dados]

O datawarehouse implementará uma arquitetura de armazenamento em múltiplas camadas:

1. **Zona de Aterragem**:
   - Dados brutos dos sistemas de origem
   - Transformação mínima
   - Armazenamento temporário para validação

2. **Área de Staging**:
   - Dados limpos e validados
   - Transformações intermediárias
   - Preparação para modelagem dimensional

3. **Núcleo do Datawarehouse**:
   - Modelo dimensional (esquema em estrela)
   - Tabelas de factos para métricas e medidas
   - Tabelas de dimensão para entidades e atributos

4. **Data Marts**:
   - Conjuntos de dados analíticos específicos por assunto
   - Otimizados para necessidades específicas de relatórios
   - Medidas pré-agregadas para desempenho

5. **Camada Semântica**:
   - Implementação de lógica de negócios
   - Medidas calculadas e KPIs
   - Nomenclatura e organização amigável ao utilizador

### Processos ETL (Extração, Transformação, Carregamento)

Os processos ETL serão implementados usando uma combinação de Azure Data Factory e Power BI Dataflows, seguindo estes princípios:

1. **Extração**:
   - Extração programada de dados dos sistemas de origem
   - Captura de dados alterados para atualizações incrementais
   - Extração baseada em API para dados em tempo real

2. **Transformação**:
   - Limpeza e validação de dados
   - Padronização de códigos e valores
   - Derivação de campos calculados
   - Resolução de entidades e deduplicação
   - Criação de hierarquias dimensionais

3. **Carregamento**:
   - Carregamento incremental para minimizar o tempo de processamento
   - Preservação de dados históricos
   - Atualizações de tabelas de dimensão com técnicas de dimensão de alteração lenta
   - Particionamento de tabelas de factos para desempenho

### Mecanismos de Atualização de Dados

O datawarehouse implementará os seguintes mecanismos de atualização:

1. **Processamento em Lote Programado**:
   - Atualização diária completa de dados críticos
   - Atualização semanal do datawarehouse completo
   - Consolidação mensal de dados históricos

2. **Atualizações Incrementais**:
   - Atualizações em tempo quase real para indicadores críticos
   - Captura de dados alterados para processamento eficiente
   - Atualizações baseadas em partição para tabelas grandes

3. **Processamento Sob Demanda**:
   - Capacidades de atualização manual para atualizações urgentes
   - Atualizações acionadas por eventos para sistemas críticos

## 4.3 Implementação do Power BI

### Arquitetura do Serviço Power BI

A implementação do Power BI utilizará os seguintes componentes:

1. **Capacidade Premium do Power BI**:
   - Recursos dedicados para processamento de relatórios
   - Tamanhos de conjunto de dados maiores
   - Capacidades avançadas de IA
   - Suporte a relatórios paginados

2. **Gateway do Power BI**:
   - Conexão segura com fontes de dados on-premises
   - Gestão de atualização programada
   - Balanceamento de carga para desempenho

3. **Serviço Power BI**:
   - Hospedagem e partilha de relatórios
   - Criação e distribuição de dashboards
   - Acesso a relatórios móveis
   - Capacidades de análise incorporada

### Arquitetura de Relatórios e Dashboards

A arquitetura de relatórios será organizada numa estrutura hierárquica:

1. **Dashboards Executivos**:
   - KPIs a nível institucional
   - Tendências e padrões de alto nível
   - Indicadores estratégicos

2. **Dashboards Operacionais**:
   - Métricas a nível de escola e curso
   - Indicadores táticos para gestão
   - Ferramentas de análise comparativa

3. **Relatórios Analíticos**:
   - Capacidades de análise detalhada
   - Funcionalidade de drill-down
   - Ferramentas de investigação de causa raiz

4. **Relatórios Especializados**:
   - Análise específica por assunto
   - Mapeamento detalhado da jornada do estudante
   - Vistas de análise preditiva

### Arquitetura do Modelo de Dados

O modelo de dados do Power BI implementará:

1. **Tabelas em Modo de Importação**:
   - Para dados históricos e de referência
   - Métricas pré-agregadas
   - Tabelas de dimensão

2. **Tabelas em Modo DirectQuery**:
   - Para dados em tempo quase real
   - Conjuntos de dados muito grandes
   - Dados que mudam frequentemente

3. **Modelos Compostos**:
   - Combinação de importação e DirectQuery
   - Otimizados tanto para desempenho quanto para atualidade

4. **Grupos de Cálculo**:
   - Cálculos padronizados de inteligência temporal
   - Opções consistentes de formatação e exibição
   - Modelos reutilizáveis de medidas

### Modelo de Segurança

A implementação de segurança incluirá:

1. **Controlo de Acesso Baseado em Funções**:
   - Funções administrativas
   - Funções baseadas em departamento/escola
   - Funções de coordenador de curso
   - Funções de analista

2. **Segurança a Nível de Linha**:
   - Restrições de dados a nível de escola
   - Restrições de dados a nível de curso
   - Regras especiais de acesso a dados

3. **Segurança a Nível de Objeto**:
   - Permissões de relatórios e dashboards
   - Controlos de acesso a conjuntos de dados
   - Permissões de dataflow

4. **Integração com Gestão de Identidade Institucional**:
   - Integração com Azure Active Directory
   - Capacidades de single sign-on
   - Gestão de permissões baseada em grupos
