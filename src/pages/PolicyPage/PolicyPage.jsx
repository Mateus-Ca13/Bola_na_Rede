import React from 'react'

export default function PolicyPage() {
    return (
        <main className='text-center p-6 text-sm text-gray1 bg-gradient-to-b to-blue2 from-cyan'>
            <h1 className='title text-blue1 text-2xl'>POLÍTICA DE PRIVACIDADE</h1>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>1. Introdução</h2>
                <p>A plataforma <strong>Bola na Rede</strong> leva a privacidade de seus usuários com extrema seriedade, comprometendo-se a garantir que todos os dados pessoais coletados sejam tratados de forma segura, transparente e em conformidade com as melhores práticas de privacidade de dados e as normas de proteção aplicáveis. Esta Política de Privacidade estabelece as bases sobre as quais os dados pessoais dos usuários serão processados e os seus direitos quanto ao tratamento desses dados.</p>
                <p>Ao utilizar nossos serviços, você concorda com a coleta, o uso e a partilha dos seus dados nos termos desta Política de Privacidade.</p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>2. Dados Pessoais Coletados</h2>
                <p>Coletamos informações pessoais diretamente fornecidas pelos usuários e dados gerados durante a utilização da plataforma. Os tipos de dados que podem ser coletados incluem, mas não se limitam a:</p>
                <ul className='mx-4 list-disc'>
                    <li>Informações de Identificação Pessoal (IIP): Nome completo, nome de usuário (username), e-mail, número de telefone, idade, gênero.</li>
                    <li>Informações de Geolocalização: Localização aproximada (obtida com base em geolocalização) para sugerir partidas próximas ao usuário.</li>
                    <li>Dados de Autenticação: Senhas (armazenadas em formato criptografado/hashes), métodos de verificação via SMS, e token de autenticação para garantir a segurança de acesso.</li>
                    <li>Dados Comportamentais: Preferências de estilo de jogo, partidas realizadas, interações com outros usuários e uso geral da aplicação para fins de análise e melhoria da plataforma.</li>
                </ul>
                <p>Além disso, a plataforma pode coletar dados técnicos, como o endereço IP, tipo de dispositivo, versão do sistema operacional e o navegador utilizado, para garantir a compatibilidade e a segurança da aplicação.</p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>3. Finalidade do Tratamento de Dados</h2>
                <p>O tratamento dos dados pessoais dos usuários do <strong>Bola na Rede</strong> é realizado com base em finalidades claramente definidas e legítimas, tais como:</p>
                <ul className='mx-4 list-disc'>
                    <li>Prestação de Serviços: Utilizamos os dados para permitir o funcionamento adequado da plataforma, incluindo a sugestão de partidas com base na localização e preferências dos usuários.
                        Autenticação e Segurança: Verificação de identidade através de SMS, autenticação de login, e utilização de senhas criptografadas.</li>
                    <li>Aprimoramento de Funcionalidades: Utilizamos dados comportamentais para otimizar a experiência do usuário, melhorar o desempenho da plataforma e adicionar novas funcionalidades.
                        Análises e Estatísticas: Realização de análises anônimas e agregadas de uso para melhorar a eficiência e qualidade do serviço oferecido.</li>
                    <li>Comunicações e Notificações: Envio de e-mails ou SMS para confirmações de cadastro, verificação de conta, informações sobre eventos e notificações de segurança.</li>
                </ul>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>4. Base Legal para o Tratamento</h2>
                <p>O tratamento de dados pessoais no <strong>Bola na Rede</strong> está fundamentado nas seguintes bases legais:</p>
                <ul className='mx-4 list-disc'>
                    <li>Consentimento: O uso dos dados ocorre mediante o consentimento livre e informado do usuário, obtido no momento da criação da conta.</li>
                    <li>Execução de Contrato: O tratamento é necessário para a execução dos serviços oferecidos pela plataforma, como sugerir partidas e interações entre os usuários.</li>
                    <li>Interesse Legítimo: Utilizamos dados para garantir a segurança da aplicação e melhorar a experiência dos usuários, sempre buscando equilibrar nossos interesses com a privacidade do usuário</li>
                </ul>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>5. Compartilhamento de Dados</h2>
                <p>Os dados dos usuários do <strong>Bola na Rede</strong> não são compartilhados com terceiros para fins de marketing ou outros usos fora da plataforma. Eventualmente, poderão ser compartilhados com fornecedores de serviços essenciais para o funcionamento da plataforma, como provedores de autenticação via SMS ou hospedagem de dados, que agirão sob estrito contrato de confidencialidade e segurança de dados.</p>
                <p>Esses terceiros somente terão acesso aos dados necessários para a prestação do serviço contratado e estão sujeitos a auditorias de conformidade com nossas normas de segurança da informação e privacidade.</p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>6. Medidas de Segurança</h2>
                <p>O <strong>Bola na Rede</strong> implementa rigorosas medidas de segurança para proteger os dados dos usuários contra perda, uso indevido, acesso não autorizado, divulgação, alteração e destruição. Entre as medidas aplicadas, destacam-se:</p>
                <ul className='mx-4 list-disc'>
                    <li>Criptografia de Dados Sensíveis: Senhas e outros dados críticos são protegidos por criptografia de alto nível (hashes com salting), impossibilitando sua recuperação ou exposição em texto claro.</li>
                    <li>Autenticação em Dois Fatores: Implementação de autenticação via SMS como forma de garantir que o titular da conta tenha controle exclusivo sobre o acesso.</li>
                    <li>Monitoramento e Logs de Segurança: A plataforma mantém registros de acesso e atividades críticas para identificar e prevenir incidentes de segurança.</li>
                    <li>Auditorias Regulares: Realizamos auditorias internas e externas regulares para garantir que as práticas de segurança estejam em conformidade com as melhores normas e padrões da indústria.</li>
                </ul>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>7. Retenção de Dados</h2>
                <p>Os dados dos usuários serão mantidos pelo tempo que for necessário para atingir as finalidades descritas nesta política, ou enquanto o usuário mantiver uma conta ativa no <strong>Bola na Rede</strong>. Uma vez que o usuário optar por excluir sua conta, todos os dados associados serão permanentemente excluídos dos nossos sistemas, exceto quando a retenção for exigida por obrigações legais.</p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>8. Direitos dos Titulares de Dados</h2>
                <p>De acordo com a legislação aplicável, os usuários têm os seguintes direitos sobre os seus dados pessoais:</p>
                <ul className='mx-4 list-disc'>
                    <li>Acesso: Você tem o direito de solicitar uma cópia dos seus dados pessoais mantidos por nós.</li>
                    <li>Correção: Você pode solicitar a correção de informações pessoais imprecisas ou desatualizadas.</li>
                    <li>Exclusão (Direito ao Esquecimento): Você pode solicitar a exclusão de seus dados pessoais, salvo em situações em que precisemos mantê-los para cumprir obrigações legais.</li>
                    <li>Portabilidade: Sob certas circunstâncias, você tem o direito de receber seus dados pessoais em um formato estruturado e de uso comum.</li>
                    <li>Restrição de Processamento: Você pode solicitar a limitação do uso dos seus dados, especialmente em casos onde questiona a legalidade do tratamento.</li>
                </ul>
                <p>Para exercer qualquer um desses direitos, entre em contato conosco através do e-mail: <strong>bolanarede@gmail.com</strong>. Nossa equipe irá avaliar sua solicitação e responder dentro dos prazos estipulados pela legislação aplicável.</p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>9. Transferências Internacionais de Dados</h2>
                <p>Embora a operação do <strong>Bola na Rede</strong> seja voltada para o Brasil, é possível que alguns dados sejam transferidos para servidores fora do país, por conta da utilização de prestadores de serviços globais (como serviços de hospedagem em nuvem). Caso isso ocorra, garantimos que as transferências serão realizadas conforme as exigências legais aplicáveis, adotando salvaguardas adequadas, como contratos de transferência de dados com cláusulas contratuais padrão reconhecidas internacionalmente.</p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>10. Alterações na Política de Privacidade</h2>
                <p>O <strong>Bola na Rede</strong> reserva-se o direito de alterar esta Política de Privacidade a qualquer momento, sem aviso prévio. Tais alterações entrarão em vigor a partir do momento de sua publicação em nossa plataforma. Recomendamos que os usuários revisem periodicamente esta Política para se manterem informados sobre eventuais mudanças.</p>
            </div>
            <h1 className='title text-blue1 text-2xl'>TERMOS DE USO</h1>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>1. Introdução</h2>
                <p>Estes Termos de Uso regulam o acesso e o uso da plataforma <strong>Bola na Rede</strong>. Ao criar uma conta e utilizar nossos serviços, você concorda em cumprir integralmente estes termos, bem como quaisquer outros regulamentos ou políticas publicados na plataforma.</p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>2. Criação e Manutenção de Conta</h2>
                <p>Ao se registrar no <strong>Bola na Rede</strong>, você declara que as informações fornecidas são verdadeiras, completas e atualizadas. Cada usuário é responsável por manter a confidencialidade das suas credenciais de acesso e por todas as atividades realizadas em sua conta.</p>
                <p>Usuários com idade inferior a 18 anos devem obter o consentimento expresso de seus responsáveis legais para utilizar a plataforma.</p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>3. Uso Adequado da Plataforma</h2>
                <p>Você concorda em utilizar a plataforma de maneira ética e respeitosa, abstendo-se de qualquer comportamento ofensivo, ilegal ou que viole os direitos de outros usuários. Isso inclui, mas não se limita a:</p>
                <ul className='mx-4 list-disc'>
                    <li>Publicar ou compartilhar conteúdo discriminatório, ofensivo, violento ou que incite ódio.</li>
                    <li>Enganar outros usuários quanto às características das partidas ou participantes.</li>
                    <li>Utilizar o sistema de geolocalização para fins abusivos ou que coloquem outros usuários em risco.</li>
                    <li>Violar direitos de propriedade intelectual ou qualquer outro direito de terceiros.</li>
                    <li>Usuários que violarem essas regras estarão sujeitos a sanções imediatas, incluindo a suspensão ou encerramento permanente da conta, além de serem responsabilizados judicialmente conforme a legislação vigente.</li>
                </ul>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>4. Propriedade Intelectual</h2>
                <p>Todos os direitos de propriedade intelectual da plataforma <strong>Bola na Rede</strong>, incluindo design, logotipo, funcionalidades e código-fonte, pertencem à empresa operadora do serviço e são protegidos pela legislação aplicável. O uso indevido ou reprodução não autorizada de qualquer parte da plataforma constituirá infração de direitos de propriedade intelectual, sujeita a sanções legais.</p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>5. Limitação de Responsabilidade</h2>
                <p>Embora o <strong>Bola na Rede</strong> envidará esforços razoáveis para garantir que a plataforma funcione de forma segura e eficiente, não podemos garantir que o serviço será ininterrupto ou livre de erros. Não nos responsabilizamos por quaisquer prejuízos diretos, indiretos ou incidentais decorrentes do uso ou da incapacidade de uso da plataforma.</p>
                <p>Além disso, a plataforma não se responsabiliza pelas interações e relações entre os usuários fora do ambiente da plataforma, incluindo, mas não se limitando, a eventuais acidentes, conflitos ou prejuízos resultantes das partidas organizadas entre os usuários.</p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>6. Alterações nos Termos de Uso</h2>
                <p>Estes Termos de Uso poderão ser alterados a qualquer momento, mediante publicação de uma nova versão na plataforma. Ao continuar utilizando o serviço após a publicação das alterações, você aceita os novos Termos de Uso.
                </p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>7. Direitos dos Usuários e Moderação de Conteúdo</h2>
                <p>Os usuários têm o direito de:</p>
                <ul className='mx-4 list-disc'>
                    <li>Criar e participar de sessões de partidas, utilizando os filtros oferecidos pela plataforma, tais como localização, idade, estilo de jogo, etc.</li>
                    <li>Comunicar-se com outros usuários por meio das ferramentas de chat disponibilizadas na plataforma, seguindo as diretrizes de convivência respeitosa.</li>
                    <li>Editar ou excluir sessões de partidas, caso sejam os criadores das mesmas, respeitando o status de líder da partida ou outros critérios estabelecidos pela plataforma.</li>
                </ul>
                <p>A moderação de conteúdo no <strong>Bola na Rede</strong> será realizada pela equipe de suporte, que reserva o direito de revisar, remover ou alterar qualquer conteúdo que viole os Termos de Uso ou as diretrizes de comportamento. Isso inclui mensagens entre usuários que contenham linguagem abusiva, preconceituosa ou inapropriada.</p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>7.1. Política de Moderação e Suspensão de Contas</h2>
                <p>Usuários que infrinjam repetidamente as diretrizes poderão ter suas contas suspensas temporariamente ou excluídas permanentemente. A plataforma <strong>Bola na Rede</strong> se reserva o direito de encerrar contas a qualquer momento, sem aviso prévio, se houver violação grave, como:</p>
                <ul className='mx-4 list-disc'>
                    <li>Uso de linguagem ou conduta discriminatória, abusiva ou ilegal.</li>
                    <li>Criação de múltiplas contas falsas para manipular os resultados ou enganar outros usuários.</li>
                    <li>Qualquer tentativa de hackear, comprometer ou desestabilizar a segurança da plataforma.</li>
                </ul>
                <p>Em caso de encerramento permanente da conta, o usuário perderá o acesso a todos os dados e histórico de atividades na plataforma</p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>8. Restrições de Uso e Conduta Proibida</h2>
                <p>Os usuários estão proibidos de:</p>
                <ul className='mx-4 list-disc'>
                    <li>Usar a plataforma para fins comerciais, exceto se expressamente autorizado pela equipe do <strong>Bola na Rede</strong>.</li>
                    <li>Usar qualquer sistema automatizado, como bots, para interagir com a plataforma ou manipular o sistema de partidas.</li>
                    <li>Coletar dados pessoais de outros usuários sem consentimento explícito, seja para fins comerciais, marketing ou outras atividades.</li>
                    <li>Realizar atividades fraudulentas, como criar perfis falsos ou usar identidades de terceiros.</li>
                    <li>O descumprimento dessas restrições pode levar à rescisão imediata da conta, e, dependendo da gravidade, as atividades poderão ser relatadas às autoridades competentes.</li>
                </ul>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>9. Exclusão de Garantias</h2>
                <p>O <strong>Bola na Rede</strong> é oferecido "como está" e "conforme disponível", sem garantias de qualquer tipo, sejam elas expressas ou implícitas, incluindo, mas não se limitando, a garantias implícitas de adequação a uma finalidade específica, ou não-violação.</p>
                <p><strong>Não garantimos que:</strong></p>
                <ul className='mx-4 list-disc'>
                    <li>O serviço estará sempre disponível, ininterrupto ou livre de erros.</li>
                    <li>As informações fornecidas pelos usuários (como localização ou estilo de jogo) serão sempre precisas ou livres de imprecisões.</li>
                    <li>Haverá compatibilidade contínua com todos os dispositivos ou navegadores, ou que o serviço será livre de vulnerabilidades de segurança.</li>
                </ul>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>10. Rescisão</h2>
                <p>O <strong>Bola na Rede</strong> reserva-se o direito de rescindir unilateralmente o acesso do usuário à plataforma a qualquer momento, caso os Termos de Uso ou a Política de Privacidade sejam violados.</p>
                <p>Os usuários podem encerrar sua conta a qualquer momento, solicitando a exclusão via menu de configurações da plataforma. Após a exclusão, todos os dados pessoais do usuário serão removidos, exceto se a retenção for legalmente exigida.</p>
            </div>
            <div className='my-3 columnbox gap-3'>
                <h2 className='title text-white'>11. Lei Aplicável e Foro Competente</h2>
                <p>Estes Termos de Uso e a Política de Privacidade serão regidos e interpretados de acordo com as leis brasileiras, e qualquer litígio será resolvido no foro da comarca da sede da empresa, salvo disposição legal em contrário.</p>
            </div>

        </main>
    )
}
