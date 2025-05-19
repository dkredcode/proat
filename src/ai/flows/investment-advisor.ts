// Investment advisor flow that uses AI to suggest optimal USDT financing options based on user risk profiles.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InvestmentAdvisorInputSchema = z.object({
  riskTolerance: z
    .enum(['low', 'medium', 'high'])
    .describe('The user risk tolerance: low, medium, or high.'),
  investmentGoals: z
    .string()
    .describe('The investment goals of the user, e.g., retirement, short-term savings, etc.'),
  investmentAmount: z.number().describe('The amount the user wants to invest in USDT.'),
});
export type InvestmentAdvisorInput = z.infer<typeof InvestmentAdvisorInputSchema>;

const InvestmentRecommendationSchema = z.object({
  financingOption: z.string().describe('The recommended financing option.'),
  duration: z.string().describe('The duration of the financing option.'),
  yieldPercentage: z.number().describe('The yield percentage of the financing option.'),
  reasoning: z.string().describe('The reasoning behind the recommendation.'),
});

const InvestmentAdvisorOutputSchema = z.object({
  recommendations: z.array(InvestmentRecommendationSchema).describe('The list of investment recommendations.'),
});
export type InvestmentAdvisorOutput = z.infer<typeof InvestmentAdvisorOutputSchema>;

export async function getInvestmentRecommendations(input: InvestmentAdvisorInput): Promise<InvestmentAdvisorOutput> {
  return investmentAdvisorFlow(input);
}

const investmentAdvisorPrompt = ai.definePrompt({
  name: 'investmentAdvisorPrompt',
  input: {schema: InvestmentAdvisorInputSchema},
  output: {schema: InvestmentAdvisorOutputSchema},
  prompt: `You are an AI investment advisor specializing in USDT financing options.

  Based on the user's risk tolerance, investment goals, and investment amount, provide personalized USDT investment recommendations.

  Risk Tolerance: {{{riskTolerance}}}
  Investment Goals: {{{investmentGoals}}}
  Investment Amount: {{{investmentAmount}}} USDT

  Consider various financing options with different durations and yield percentages.
  Provide a list of investment recommendations with the following information for each recommendation:
  - financingOption: The name of the financing option.
  - duration: The duration of the financing option.
  - yieldPercentage: The yield percentage of the financing option.
  - reasoning: The reasoning behind the recommendation based on the user's input.

  Ensure that the recommendations align with the user's risk tolerance and investment goals.

  {{outputFormat schema=InvestmentAdvisorOutputSchema}}
  `,
});

const investmentAdvisorFlow = ai.defineFlow(
  {
    name: 'investmentAdvisorFlow',
    inputSchema: InvestmentAdvisorInputSchema,
    outputSchema: InvestmentAdvisorOutputSchema,
  },
  async input => {
    const {output} = await investmentAdvisorPrompt(input);
    return output!;
  }
);
