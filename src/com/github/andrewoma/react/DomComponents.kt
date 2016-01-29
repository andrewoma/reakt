package com.github.andrewoma.react

fun <T> initProps(properties: T, init: T.() -> Unit): T {
    properties.init()
    return flatten(properties)
}

public fun Component.text(value: String, init: Component.() -> Unit = {}): Component
        = constructAndInsert(Component({ value }), init)

@native("React.DOM.a")
@Suppress("UNUSED_PARAMETER")
fun reactA(props: AProperties, vararg children: Any?): ReactElement<AProperties> = noImpl

public fun Component.a(properties: AProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactA(initProps(AProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.abbr")
@Suppress("UNUSED_PARAMETER")
fun reactAbbr(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.abbr(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactAbbr(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.address")
@Suppress("UNUSED_PARAMETER")
fun reactAddress(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.address(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactAddress(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.area")
@Suppress("UNUSED_PARAMETER")
fun reactArea(props: AreaProperties, vararg children: Any?): ReactElement<AreaProperties> = noImpl

public fun Component.area(properties: AreaProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactArea(initProps(AreaProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.article")
@Suppress("UNUSED_PARAMETER")
fun reactArticle(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.article(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactArticle(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.aside")
@Suppress("UNUSED_PARAMETER")
fun reactAside(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.aside(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactAside(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.audio")
@Suppress("UNUSED_PARAMETER")
fun reactAudio(props: AudioProperties, vararg children: Any?): ReactElement<AudioProperties> = noImpl

public fun Component.audio(properties: AudioProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactAudio(initProps(AudioProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.b")
@Suppress("UNUSED_PARAMETER")
fun reactB(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.b(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactB(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.base")
@Suppress("UNUSED_PARAMETER")
fun reactBase(props: BaseProperties, vararg children: Any?): ReactElement<BaseProperties> = noImpl

public fun Component.base(properties: BaseProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactBase(initProps(BaseProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.bdi")
@Suppress("UNUSED_PARAMETER")
fun reactBdi(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.bdi(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactBdi(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.bdo")
@Suppress("UNUSED_PARAMETER")
fun reactBdo(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.bdo(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactBdo(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.big")
@Suppress("UNUSED_PARAMETER")
fun reactBig(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.big(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactBig(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.blockquote")
@Suppress("UNUSED_PARAMETER")
fun reactBlockquote(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.blockquote(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactBlockquote(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.body")
@Suppress("UNUSED_PARAMETER")
fun reactBody(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.body(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactBody(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.br")
@Suppress("UNUSED_PARAMETER")
fun reactBr(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.br(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactBr(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.button")
@Suppress("UNUSED_PARAMETER")
fun reactButton(props: ButtonProperties, vararg children: Any?): ReactElement<ButtonProperties> = noImpl

public fun Component.button(properties: ButtonProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactButton(initProps(ButtonProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.canvas")
@Suppress("UNUSED_PARAMETER")
fun reactCanvas(props: CanvasProperties, vararg children: Any?): ReactElement<CanvasProperties> = noImpl

public fun Component.canvas(properties: CanvasProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactCanvas(initProps(CanvasProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.caption")
@Suppress("UNUSED_PARAMETER")
fun reactCaption(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.caption(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactCaption(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.cite")
@Suppress("UNUSED_PARAMETER")
fun reactCite(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.cite(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactCite(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.code")
@Suppress("UNUSED_PARAMETER")
fun reactCode(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.code(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactCode(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.col")
@Suppress("UNUSED_PARAMETER")
fun reactCol(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.col(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactCol(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.colgroup")
@Suppress("UNUSED_PARAMETER")
fun reactColgroup(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.colgroup(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactColgroup(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.data")
@Suppress("UNUSED_PARAMETER")
fun reactData(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.data(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactData(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.datalist")
@Suppress("UNUSED_PARAMETER")
fun reactDatalist(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.datalist(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactDatalist(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.dd")
@Suppress("UNUSED_PARAMETER")
fun reactDd(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.dd(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactDd(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.del")
@Suppress("UNUSED_PARAMETER")
fun reactDel(props: DelProperties, vararg children: Any?): ReactElement<DelProperties> = noImpl

public fun Component.del(properties: DelProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactDel(initProps(DelProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.details")
@Suppress("UNUSED_PARAMETER")
fun reactDetails(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.details(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactDetails(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.dfn")
@Suppress("UNUSED_PARAMETER")
fun reactDfn(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.dfn(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactDfn(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.div")
@Suppress("UNUSED_PARAMETER")
fun reactDiv(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.div(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactDiv(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.dl")
@Suppress("UNUSED_PARAMETER")
fun reactDl(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.dl(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactDl(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.dt")
@Suppress("UNUSED_PARAMETER")
fun reactDt(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.dt(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactDt(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.em")
@Suppress("UNUSED_PARAMETER")
fun reactEm(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.em(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactEm(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.embed")
@Suppress("UNUSED_PARAMETER")
fun reactEmbed(props: EmbedProperties, vararg children: Any?): ReactElement<EmbedProperties> = noImpl

public fun Component.embed(properties: EmbedProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactEmbed(initProps(EmbedProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.fieldset")
@Suppress("UNUSED_PARAMETER")
fun reactFieldset(props: FieldsetProperties, vararg children: Any?): ReactElement<FieldsetProperties> = noImpl

public fun Component.fieldset(properties: FieldsetProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactFieldset(initProps(FieldsetProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.figcaption")
@Suppress("UNUSED_PARAMETER")
fun reactFigcaption(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.figcaption(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactFigcaption(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.figure")
@Suppress("UNUSED_PARAMETER")
fun reactFigure(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.figure(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactFigure(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.footer")
@Suppress("UNUSED_PARAMETER")
fun reactFooter(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.footer(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactFooter(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.form")
@Suppress("UNUSED_PARAMETER")
fun reactForm(props: FormProperties, vararg children: Any?): ReactElement<FormProperties> = noImpl

public fun Component.form(properties: FormProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactForm(initProps(FormProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.h1")
@Suppress("UNUSED_PARAMETER")
fun reactH1(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.h1(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactH1(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.h2")
@Suppress("UNUSED_PARAMETER")
fun reactH2(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.h2(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactH2(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.h3")
@Suppress("UNUSED_PARAMETER")
fun reactH3(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.h3(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactH3(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.h4")
@Suppress("UNUSED_PARAMETER")
fun reactH4(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.h4(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactH4(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.h5")
@Suppress("UNUSED_PARAMETER")
fun reactH5(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.h5(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactH5(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.h6")
@Suppress("UNUSED_PARAMETER")
fun reactH6(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.h6(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactH6(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.head")
@Suppress("UNUSED_PARAMETER")
fun reactHead(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.head(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactHead(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.header")
@Suppress("UNUSED_PARAMETER")
fun reactHeader(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.header(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactHeader(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.hr")
@Suppress("UNUSED_PARAMETER")
fun reactHr(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.hr(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactHr(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.html")
@Suppress("UNUSED_PARAMETER")
fun reactHtml(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.html(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactHtml(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.i")
@Suppress("UNUSED_PARAMETER")
fun reactI(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.i(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactI(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.iframe")
@Suppress("UNUSED_PARAMETER")
fun reactIframe(props: IframeProperties, vararg children: Any?): ReactElement<IframeProperties> = noImpl

public fun Component.iframe(properties: IframeProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactIframe(initProps(IframeProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.img")
@Suppress("UNUSED_PARAMETER")
fun reactImg(props: ImgProperties, vararg children: Any?): ReactElement<ImgProperties> = noImpl

public fun Component.img(properties: ImgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactImg(initProps(ImgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.input")
@Suppress("UNUSED_PARAMETER")
fun reactInput(props: InputProperties, vararg children: Any?): ReactElement<InputProperties> = noImpl

public fun Component.input(properties: InputProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactInput(initProps(InputProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.ins")
@Suppress("UNUSED_PARAMETER")
fun reactIns(props: InsProperties, vararg children: Any?): ReactElement<InsProperties> = noImpl

public fun Component.ins(properties: InsProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactIns(initProps(InsProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.kbd")
@Suppress("UNUSED_PARAMETER")
fun reactKbd(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.kbd(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactKbd(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.keygen")
@Suppress("UNUSED_PARAMETER")
fun reactKeygen(props: KeygenProperties, vararg children: Any?): ReactElement<KeygenProperties> = noImpl

public fun Component.keygen(properties: KeygenProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactKeygen(initProps(KeygenProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.label")
@Suppress("UNUSED_PARAMETER")
fun reactLabel(props: LabelProperties, vararg children: Any?): ReactElement<LabelProperties> = noImpl

public fun Component.label(properties: LabelProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactLabel(initProps(LabelProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.legend")
@Suppress("UNUSED_PARAMETER")
fun reactLegend(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.legend(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactLegend(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.li")
@Suppress("UNUSED_PARAMETER")
fun reactLi(props: LiProperties, vararg children: Any?): ReactElement<LiProperties> = noImpl

public fun Component.li(properties: LiProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactLi(initProps(LiProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.link")
@Suppress("UNUSED_PARAMETER")
fun reactLink(props: LinkProperties, vararg children: Any?): ReactElement<LinkProperties> = noImpl

public fun Component.link(properties: LinkProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactLink(initProps(LinkProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.main")
@Suppress("UNUSED_PARAMETER")
fun reactMain(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.main(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactMain(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.map")
@Suppress("UNUSED_PARAMETER")
fun reactMap(props: MapProperties, vararg children: Any?): ReactElement<MapProperties> = noImpl

public fun Component.map(properties: MapProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactMap(initProps(MapProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.mark")
@Suppress("UNUSED_PARAMETER")
fun reactMark(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.mark(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactMark(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.menu")
@Suppress("UNUSED_PARAMETER")
fun reactMenu(props: MenuProperties, vararg children: Any?): ReactElement<MenuProperties> = noImpl

public fun Component.menu(properties: MenuProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactMenu(initProps(MenuProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.menuitem")
@Suppress("UNUSED_PARAMETER")
fun reactMenuitem(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.menuitem(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactMenuitem(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.meta")
@Suppress("UNUSED_PARAMETER")
fun reactMeta(props: MetaProperties, vararg children: Any?): ReactElement<MetaProperties> = noImpl

public fun Component.meta(properties: MetaProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactMeta(initProps(MetaProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.meter")
@Suppress("UNUSED_PARAMETER")
fun reactMeter(props: MeterProperties, vararg children: Any?): ReactElement<MeterProperties> = noImpl

public fun Component.meter(properties: MeterProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactMeter(initProps(MeterProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.nav")
@Suppress("UNUSED_PARAMETER")
fun reactNav(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.nav(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactNav(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.noscript")
@Suppress("UNUSED_PARAMETER")
fun reactNoscript(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.noscript(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactNoscript(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.object")
@Suppress("UNUSED_PARAMETER")
fun reactObject(props: ObjectProperties, vararg children: Any?): ReactElement<ObjectProperties> = noImpl

public fun Component.obj(properties: ObjectProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactObject(initProps(ObjectProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.ol")
@Suppress("UNUSED_PARAMETER")
fun reactOl(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.ol(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactOl(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.optgroup")
@Suppress("UNUSED_PARAMETER")
fun reactOptgroup(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.optgroup(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactOptgroup(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.option")
@Suppress("UNUSED_PARAMETER")
fun reactOption(props: OptionProperties, vararg children: Any?): ReactElement<OptionProperties> = noImpl

public fun Component.option(properties: OptionProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactOption(initProps(OptionProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.output")
@Suppress("UNUSED_PARAMETER")
fun reactOutput(props: OutputProperties, vararg children: Any?): ReactElement<OutputProperties> = noImpl

public fun Component.output(properties: OutputProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactOutput(initProps(OutputProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.p")
@Suppress("UNUSED_PARAMETER")
fun reactP(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.p(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactP(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.param")
@Suppress("UNUSED_PARAMETER")
fun reactParam(props: ParamProperties, vararg children: Any?): ReactElement<ParamProperties> = noImpl

public fun Component.param(properties: ParamProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactParam(initProps(ParamProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.pre")
@Suppress("UNUSED_PARAMETER")
fun reactPre(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.pre(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactPre(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.progress")
@Suppress("UNUSED_PARAMETER")
fun reactProgress(props: ProgressProperties, vararg children: Any?): ReactElement<ProgressProperties> = noImpl

public fun Component.progress(properties: ProgressProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactProgress(initProps(ProgressProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.q")
@Suppress("UNUSED_PARAMETER")
fun reactQ(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.q(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactQ(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.rp")
@Suppress("UNUSED_PARAMETER")
fun reactRp(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.rp(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactRp(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.rt")
@Suppress("UNUSED_PARAMETER")
fun reactRt(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.rt(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactRt(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.ruby")
@Suppress("UNUSED_PARAMETER")
fun reactRuby(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.ruby(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactRuby(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.s")
@Suppress("UNUSED_PARAMETER")
fun reactS(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.s(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactS(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.samp")
@Suppress("UNUSED_PARAMETER")
fun reactSamp(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.samp(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactSamp(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.script")
@Suppress("UNUSED_PARAMETER")
fun reactScript(props: ScriptProperties, vararg children: Any?): ReactElement<ScriptProperties> = noImpl

public fun Component.script(properties: ScriptProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactScript(initProps(ScriptProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.section")
@Suppress("UNUSED_PARAMETER")
fun reactSection(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.section(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactSection(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.select")
@Suppress("UNUSED_PARAMETER")
fun reactSelect(props: SelectProperties, vararg children: Any?): ReactElement<SelectProperties> = noImpl

public fun Component.select(properties: SelectProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactSelect(initProps(SelectProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.small")
@Suppress("UNUSED_PARAMETER")
fun reactSmall(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.small(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactSmall(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.source")
@Suppress("UNUSED_PARAMETER")
fun reactSource(props: SourceProperties, vararg children: Any?): ReactElement<SourceProperties> = noImpl

public fun Component.source(properties: SourceProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactSource(initProps(SourceProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.span")
@Suppress("UNUSED_PARAMETER")
fun reactSpan(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.span(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactSpan(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.strong")
@Suppress("UNUSED_PARAMETER")
fun reactStrong(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.strong(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactStrong(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.style")
@Suppress("UNUSED_PARAMETER")
fun reactStyle(props: StyleProperties, vararg children: Any?): ReactElement<StyleProperties> = noImpl

public fun Component.style(properties: StyleProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactStyle(initProps(StyleProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.sub")
@Suppress("UNUSED_PARAMETER")
fun reactSub(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.sub(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactSub(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.summary")
@Suppress("UNUSED_PARAMETER")
fun reactSummary(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.summary(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactSummary(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.sup")
@Suppress("UNUSED_PARAMETER")
fun reactSup(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.sup(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactSup(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.table")
@Suppress("UNUSED_PARAMETER")
fun reactTable(props: TableProperties, vararg children: Any?): ReactElement<TableProperties> = noImpl

public fun Component.table(properties: TableProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactTable(initProps(TableProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.tbody")
@Suppress("UNUSED_PARAMETER")
fun reactTbody(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.tbody(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactTbody(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.td")
@Suppress("UNUSED_PARAMETER")
fun reactTd(props: TdProperties, vararg children: Any?): ReactElement<TdProperties> = noImpl

public fun Component.td(properties: TdProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactTd(initProps(TdProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.textarea")
@Suppress("UNUSED_PARAMETER")
fun reactTextarea(props: TextareaProperties, vararg children: Any?): ReactElement<TextareaProperties> = noImpl

public fun Component.textarea(properties: TextareaProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactTextarea(initProps(TextareaProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.tfoot")
@Suppress("UNUSED_PARAMETER")
fun reactTfoot(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.tfoot(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactTfoot(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.th")
@Suppress("UNUSED_PARAMETER")
fun reactTh(props: ThProperties, vararg children: Any?): ReactElement<ThProperties> = noImpl

public fun Component.th(properties: ThProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactTh(initProps(ThProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.thead")
@Suppress("UNUSED_PARAMETER")
fun reactThead(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.thead(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactThead(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.time")
@Suppress("UNUSED_PARAMETER")
fun reactTime(props: TimeProperties, vararg children: Any?): ReactElement<TimeProperties> = noImpl

public fun Component.time(properties: TimeProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactTime(initProps(TimeProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.title")
@Suppress("UNUSED_PARAMETER")
fun reactTitle(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.title(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactTitle(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.tr")
@Suppress("UNUSED_PARAMETER")
fun reactTr(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.tr(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactTr(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.track")
@Suppress("UNUSED_PARAMETER")
fun reactTrack(props: TrackProperties, vararg children: Any?): ReactElement<TrackProperties> = noImpl

public fun Component.track(properties: TrackProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactTrack(initProps(TrackProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.u")
@Suppress("UNUSED_PARAMETER")
fun reactU(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.u(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactU(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.ul")
@Suppress("UNUSED_PARAMETER")
fun reactUl(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.ul(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactUl(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.var")
@Suppress("UNUSED_PARAMETER")
fun reactVar(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.variable(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactVar(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.video")
@Suppress("UNUSED_PARAMETER")
fun reactVideo(props: VideoProperties, vararg children: Any?): ReactElement<VideoProperties> = noImpl

public fun Component.video(properties: VideoProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactVideo(initProps(VideoProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.wbr")
@Suppress("UNUSED_PARAMETER")
fun reactWbr(props: HtmlGlobalProperties, vararg children: Any?): ReactElement<HtmlGlobalProperties> = noImpl

public fun Component.wbr(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactWbr(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.circle")
@Suppress("UNUSED_PARAMETER")
fun reactCircle(props: SvgProperties, vararg children: Any?): ReactElement<SvgProperties> = noImpl

public fun Component.circle(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactCircle(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.g")
@Suppress("UNUSED_PARAMETER")
fun reactG(props: SvgProperties, vararg children: Any?): ReactElement<SvgProperties> = noImpl

public fun Component.g(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactG(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.line")
@Suppress("UNUSED_PARAMETER")
fun reactLine(props: SvgProperties, vararg children: Any?): ReactElement<SvgProperties> = noImpl

public fun Component.line(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactLine(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.path")
@Suppress("UNUSED_PARAMETER")
fun reactPath(props: SvgProperties, vararg children: Any?): ReactElement<SvgProperties> = noImpl

public fun Component.path(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactPath(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.polygon")
@Suppress("UNUSED_PARAMETER")
fun reactPolygon(props: SvgProperties, vararg children: Any?): ReactElement<SvgProperties> = noImpl

public fun Component.polygon(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactPolygon(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.polyline")
@Suppress("UNUSED_PARAMETER")
fun reactPolyline(props: SvgProperties, vararg children: Any?): ReactElement<SvgProperties> = noImpl

public fun Component.polyline(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactPolyline(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.rect")
@Suppress("UNUSED_PARAMETER")
fun reactRect(props: SvgProperties, vararg children: Any?): ReactElement<SvgProperties> = noImpl

public fun Component.rect(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactRect(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.svg")
@Suppress("UNUSED_PARAMETER")
fun reactSvg(props: SvgProperties, vararg children: Any?): ReactElement<SvgProperties> = noImpl

public fun Component.svg(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactSvg(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.text")
@Suppress("UNUSED_PARAMETER")
fun reactText(props: SvgProperties, vararg children: Any?): ReactElement<SvgProperties> = noImpl

public fun Component.text(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return constructAndInsert(Component({ reactText(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}
