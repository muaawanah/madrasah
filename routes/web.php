<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdmissionController;
use App\Http\Controllers\AdmitCardController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\BkashController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ClassesController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DesignationController;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\QuestionPaperController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\FeeController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\IncomeController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\NoticeController;
use App\Http\Controllers\OtherPurposeController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PaymentPurposeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PurposeController;
use App\Http\Controllers\ResultController;
use App\Http\Controllers\SalaryController;
use App\Http\Controllers\SeatPlanController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SmsServiceController;
use App\Http\Controllers\StaffController;
use App\Http\Controllers\StaffFormController;
use App\Http\Controllers\StudentClassController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SummaryController;
use App\Http\Controllers\VerificationController;

use Illuminate\Support\Facades\Route;


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/notice/{notice}', [HomeController::class, 'notice'])->name('page.notice');
Route::get('/class/{class}', [HomeController::class, 'class'])->name('page.class');
Route::get('/admission', [HomeController::class, 'admission'])->name('page.admission');
Route::get('/admission-form', [HomeController::class, 'admissionForm'])->name('page.admission-form');
Route::post('/admission-form', [HomeController::class, 'admissionFormSubmit'])->name('page.admission-form-submit');
Route::get('/admission-form-blank', [HomeController::class, 'admissionFormBlank'])->name('page.admission-form-blank');

Route::get('/article', [ArticleController::class, 'index'])->name('article.index');
Route::get('/article/{post}', [ArticleController::class, 'show'])->name('article.show');

Route::get('verify/{staff}', [VerificationController::class, 'staffIdCard'])->name('verifications.staff-id-card');
Route::get('verify/{student}/{admission}', [VerificationController::class, 'studentIdCard'])->name('verifications.student-id-card');

Route::get('/software-charges/{software_charge}/bkash/create-payment', [BkashController::class, 'create']);
Route::get('/software-charge/{software_charge}/bkash/execute-payment', [BkashController::class, 'execute']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::redirect('/dashboard', '/home');
    Route::redirect('/dashboard/{any}', '/home/{any}');

    Route::get('/home', [DashboardController::class, 'dashboard'])->name('dashboard');
    
    Route::get('/home/admission', [DashboardController::class, 'admission'])->name('dashboard.admission');
    Route::get('/home/student', [DashboardController::class, 'student'])->name('dashboard.student');
    Route::get('/home/income', [DashboardController::class, 'income'])->name('dashboard.income');
    Route::get('/home/expence', [DashboardController::class, 'expence'])->name('dashboard.expence');
    Route::get('/home/staff', [DashboardController::class, 'staff'])->name('dashboard.staff');
    Route::get('/home/exam', [DashboardController::class, 'exam'])->name('dashboard.exam');
    Route::get('/home/sms-panel', [DashboardController::class, 'smsPanel'])->name('dashboard.sms-panel');
    Route::get('/home/notice', [DashboardController::class, 'notice'])->name('dashboard.notice');
    Route::get('/home/routine', [DashboardController::class, 'routine'])->name('dashboard.routine');
    Route::get('/home/report', [DashboardController::class, 'report'])->name('dashboard.report');
    Route::get('/home/article', [DashboardController::class, 'article'])->name('dashboard.article');
    Route::get('/home/setting', [DashboardController::class, 'setting'])->name('dashboard.setting');

    Route::get('settings/site-setup', [SettingController::class, 'siteSetup'])->name('settings.site-setup');
    Route::get('settings/home-page', [SettingController::class, 'homePage'])->name('settings.home-page');
    Route::get('settings/{setting}/edit', [SettingController::class, 'edit'])->name('settings.edit');
    Route::put('settings/{setting}', [SettingController::class, 'update'])->name('settings.update');

    Route::get('/students/{student}/id-card', [StudentController::class, 'idCard'])->name('students.id-card');
    Route::get('/students/{student}/money-receipt', [StudentController::class, 'moneyReceipt'])->name('students.money-receipt.index');
    Route::get('/students/{student}/money-receipt/{payment}', [StudentController::class, 'moneyReceiptShow'])->name('students.money-receipt.show');

    Route::get('student-class', [StudentClassController::class, 'index'])->name('students.class.index');
    Route::get('student-class/{class}', [StudentClassController::class, 'show'])->name('students.class.show');
    Route::get('student-class/{class}/id-card', [StudentClassController::class, 'idCard'])->name('students.class.id-card');
    Route::get('student-class/{class}/attendance-page', [StudentClassController::class, 'attendancePage'])->name('students.class.attendance-page');

    Route::get('admit-card', [AdmitCardController::class, 'index'])->name('admit-card.index');
    Route::get('admit-card/{exam}', [AdmitCardController::class, 'show'])->name('admit-card.show');
    Route::get('admit-card/{exam}/class/{class}', [AdmitCardController::class, 'list'])->name('admit-card.list');

    Route::get('question-papers/exams', [QuestionPaperController::class, 'exams'])->name('question-papers.exams');
    Route::get('question-papers/exams/{exam}/classes', [QuestionPaperController::class, 'classes'])->name('question-papers.classes');
    Route::get('question-papers/exams/{exam}/classes/{class}/subjects', [QuestionPaperController::class, 'subjects'])->name('question-papers.subjects');
    Route::get('question-papers/exams/{exam}/classes/{class}/subjects/{subject}', [QuestionPaperController::class, 'questionPaper'])->name('question-papers.question-paper');
    Route::post('question-papers/exams/{exam}/classes/{class}/subjects/{subject}', [QuestionPaperController::class, 'questionPaperSave']);

    Route::redirect('results', 'results/exams', 301);
    Route::get('results/exams', [ResultController::class, 'exams'])->name('results.exams');
    Route::get('results/exams/{exam}/classes', [ResultController::class, 'classes'])->name('results.classes');
    Route::get('results/exams/{exam}/classes/{class}/subjects', [ResultController::class, 'subjects'])->name('results.subjects');
    Route::get('results/exams/{exam}/classes/{class}/subjects/{subject}', [ResultController::class, 'create'])->name('results.create');
    Route::post('results/exams/{exam}/classes/{class}/subjects/{subject}', [ResultController::class, 'store'])->name('results.store');
    Route::get('results/exams/{exam}/classes/{class}/result-cards', [ResultController::class, 'resultCard'])->name('results.result-cards');

    Route::get('results/exams/classes', [ResultController::class, 'finalClasses'])->name('results.final.classes');
    Route::get('results/exams/classes/{class}/subjects', [ResultController::class, 'finalSubjects'])->name('results.final.subjects');
    Route::get('results/exams/classes/{class}/result-cards', [ResultController::class, 'finalResultCard'])->name('results.final.result-cards');

    Route::get('seat-plan', [SeatPlanController::class, 'index'])->name('seat-plan.index');
    Route::get('seat-plan/{exam}', [SeatPlanController::class, 'show'])->name('seat-plan.show');
    Route::post('seat-plan/{exam}', [SeatPlanController::class, 'store'])->name('seat-plan.store');
    Route::delete('seat-plan/{exam}', [SeatPlanController::class, 'destroy'])->name('seat-plan.destroy');

    Route::get('payment-purpose', [PaymentPurposeController::class, 'index'])->name('payments.purpose.index');
    Route::get('payment-purpose/{purpose}', [PaymentPurposeController::class, 'show'])->name('payments.purpose.show');
    Route::get('payment-purpose/{purpose}/class/{class}', [PaymentPurposeController::class, 'classes'])->name('payments.purpose.class');

    Route::get('other-purpose', [OtherPurposeController::class, 'index'])->name('others.purpose.index');
    Route::get('other-purpose/{purpose}', [OtherPurposeController::class, 'show'])->name('others.purpose.show');
    Route::get('other-purpose/{purpose}/class/{class}', [OtherPurposeController::class, 'classes'])->name('others.purpose.class');
    
    Route::get('student-all-id-card', [StudentClassController::class, 'allIdCard'])->name('students.all-id-card');
    Route::get('student-class/{class}/id-card', [StudentClassController::class, 'idCard'])->name('students.class.id-card');

    Route::get('staff-list', [StaffController::class, 'list'])->name('staff-list');
    Route::get('staff-attendance-page', [StaffController::class, 'attendancePage'])->name('staff-attendance-page');
    Route::get('staff-id-card', [StaffController::class, 'staffIdCard'])->name('staff.id-card');

    Route::get('salaries', [SalaryController::class, 'index'])->name('salaries.index');
    Route::get('salaries/{salary}', [SalaryController::class, 'show'])->name('salaries.show');

    Route::get('staff/{staff}/salaries/create', [SalaryController::class, 'create'])->name('staff.salaries.create');
    Route::post('staff/{staff}/salaries', [SalaryController::class, 'store'])->name('staff.salaries.store');

    Route::get('summary', SummaryController::class)->name('summary');

    Route::get('admissions/online-forms', [AdmissionController::class, 'onlineForms'])->name('admissions.online-forms.index');
    Route::get('admissions/online-forms/{admission_form}', [AdmissionController::class, 'onlineFormShow'])->name('admissions.online-forms.show');
    Route::delete('admissions/online-forms/{admission_form}', [AdmissionController::class, 'onlineFormDestroy'])->name('admissions.online-forms.destroy');

    Route::get('admissions/admission', [AdmissionController::class, 'admission'])->name('admissions.admission');

    // resource routes
    Route::resources([
        'fees'              => FeeController::class,
        'classes'           => ClassesController::class,
        'students'          => StudentController::class,
        'admissions'        => AdmissionController::class,
        'expenses'          => ExpenseController::class,
        'incomes'           => IncomeController::class,
        'categories'        => CategoryController::class,
        'admins'            => AdminController::class,
        'staff-form'        => StaffFormController::class,
        'staff'             => StaffController::class,
        'designations'      => DesignationController::class,
        'notices'           => NoticeController::class,
        'payments'          => PaymentController::class,
        'purposes'          => PurposeController::class,
        'exams'             => ExamController::class,
        'sms-services'      => SmsServiceController::class,
        'posts'             => PostController::class,
        'departments'       => DepartmentController::class,
    ]);

    // nested resource routes
    Route::resources([
        // 'departments.academic_sessions' => DepartmentAcademicSessionController::class,
    ]);

    Route::post('/image-upload-get-link', [Controller::class, 'imageUploadGetLink'])->name('image-upload-get-link');

    Route::get('/call-artisan/{password}/{command}/{parameters?}', [Controller::class, 'callArtisan']);
});

require __DIR__.'/auth.php';

