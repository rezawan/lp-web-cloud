import { ArrowRight, ChevronRight, Globe2, ServerCog, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function DomainFeaturesSection() {
	return (
		<section className="bg-surface-container-low py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					<Card className="md:col-span-2 gap-0 overflow-hidden border-0 bg-surface-container-lowest p-0 shadow-[0_12px_32px_rgba(0,24,72,0.06)]">
						<div className="grid gap-0 md:grid-cols-2">
							<div className="flex flex-col justify-center p-10">
								<div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
									Selection
								</div>
								<h3 className="mb-4 text-3xl font-bold tracking-tight text-on-surface">Popular domains</h3>
								<p className="mb-6 leading-relaxed text-on-surface-variant">
									Choose from over 500+ domain extensions. From classic .com to industry-specific .tech, we have everything you need to stand out.
								</p>

								<a href="#" className="inline-flex items-center gap-2 font-bold text-primary transition-all hover:gap-3">
									Explore TLDs <ArrowRight className="size-4" />
								</a>

								<div className="mt-8 flex flex-wrap gap-2">
									{['.com', '.id', '.net', '.cloud', '.io'].map((tld) => (
										<span key={tld} className="rounded-full bg-primary/5 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-primary/10">
											{tld}
										</span>
									))}
								</div>
							</div>

							<div className="relative min-h-72 overflow-hidden bg-linear-to-br from-primary/10 via-secondary/10 to-tertiary/10">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,61,155,0.35),transparent_28%),radial-gradient(circle_at_70%_25%,rgba(75,93,141,0.25),transparent_22%),radial-gradient(circle_at_55%_75%,rgba(163,53,0,0.22),transparent_24%)]" />
								<div className="absolute inset-0 flex items-center justify-center p-8">
									<div className="grid w-full max-w-sm gap-4">
										<div className="rounded-2xl bg-white/85 p-4 shadow-xl backdrop-blur-sm">
											<div className="flex items-center gap-3">
												<div className="rounded-xl bg-primary/10 p-3 text-primary">
													<Globe2 className="size-6" />
												</div>
												<div>
													<div className="text-sm font-semibold text-on-surface">Global DNS reach</div>
													<div className="text-xs text-on-surface-variant">Fast propagation and secure name servers</div>
												</div>
											</div>
										</div>
										<div className="rounded-2xl bg-white/75 p-4 shadow-xl backdrop-blur-sm translate-x-10">
											<div className="flex items-center gap-3">
												<div className="rounded-xl bg-secondary/10 p-3 text-secondary">
													<ShieldCheck className="size-6" />
												</div>
												<div>
													<div className="text-sm font-semibold text-on-surface">Privacy protection</div>
													<div className="text-xs text-on-surface-variant">WHOIS guard included free</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Card>

					<Card className="gap-0 justify-between border-0 bg-primary-container p-10 text-on-primary shadow-[0_12px_32px_rgba(0,24,72,0.06)]">
						<div>
							<Sparkles className="mb-6 size-10 text-on-primary-container" />
							<h3 className="mb-4 text-2xl font-bold tracking-tight">24/7 Support</h3>
							<p className="leading-relaxed text-on-primary-container">
								Our experts are available around the clock to assist you with migration and setup.
							</p>
						</div>

						<div className="mt-8 space-y-4">
							<div className="flex items-center gap-3">
								<Users className="size-5 text-on-primary-container" />
								<span className="text-sm font-semibold opacity-90">Instant live chat available</span>
							</div>
							<div className="flex -space-x-2">
								{['A', 'B', 'C'].map((initial) => (
									<div
										key={initial}
										className="flex size-10 items-center justify-center rounded-full border-2 border-primary-container bg-white text-sm font-bold text-primary"
									>
										{initial}
									</div>
								))}
							</div>
						</div>
					</Card>

					<Card className="gap-0 border-0 bg-surface-container-lowest p-10 shadow-[0_12px_32px_rgba(0,24,72,0.06)]">
						<ShieldCheck className="mb-6 size-10 text-primary" />
						<h3 className="mb-4 text-2xl font-bold tracking-tight text-on-surface">Free DNS &amp; privacy</h3>
						<p className="leading-relaxed text-on-surface-variant">
							WHOIS privacy protection and advanced DNS management included with every domain.
						</p>
					</Card>

					<Card className="md:col-span-2 gap-0 overflow-hidden border-0 bg-surface-container-lowest p-0 shadow-[0_12px_32px_rgba(0,24,72,0.06)]">
						<div className="grid gap-0 md:grid-cols-2 md:grid-flow-col-dense">
							<div className="order-2 flex flex-col justify-center p-10 md:order-1 md:items-start">
								<div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-tertiary">
									Velocity
								</div>
								<h3 className="mb-4 text-3xl font-bold tracking-tight text-on-surface">Simple setup</h3>
								<p className="mb-6 leading-relaxed text-on-surface-variant">
									Connect your domain to your hosting, email, or website builder in seconds with our automated one-click installers.
								</p>
								<button className="rounded-xl bg-primary/5 px-6 py-3 font-bold text-primary transition-colors hover:bg-primary/10">
									Learn Setup Process
								</button>
							</div>

							<div className="order-1 relative min-h-72 overflow-hidden bg-linear-to-br from-slate-100 via-white to-primary/10 md:order-2">
								<div className="absolute inset-0 p-8">
									<div className="h-full rounded-2xl border border-white/60 bg-white/80 p-6 shadow-inner backdrop-blur-sm">
										<div className="mb-6 flex items-center justify-between">
											<div>
												<div className="text-sm font-semibold text-on-surface">Domain connection</div>
												<div className="text-xs text-on-surface-variant">Set up in minutes</div>
											</div>
											<ServerCog className="size-6 text-primary" />
										</div>

										<div className="space-y-4">
											{['Register domain', 'Update nameservers', 'Point to hosting'].map((step, index) => (
												<div key={step} className="flex items-center gap-3">
													<div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
														{index + 1}
													</div>
													<div className="flex-1 rounded-xl bg-surface-container-low px-4 py-3 text-sm font-medium text-on-surface">
														{step}
													</div>
													<ChevronRight className="size-4 text-on-surface-variant" />
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
}